import * as dotenv from 'dotenv';
import express,{Request,Response,NextFunction} from 'express';
import cors from 'cors';
import * as bodyParser from 'body-parser';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { customerRouter } from './controller/customer.routes';
import { seedSupplierRouter } from './controller/seedSupplier.routes';
import { resourceRouter } from './controller/resource.routes';
import { cropRouter } from './controller/crop.routes';
import { farmerRouter } from './controller/farmer.routes';
import { userRouter } from './controller/user.routes';
import { expressjwt } from 'express-jwt';
import helmet from 'helmet';

const app = express();
app.use(helmet())
dotenv.config();
const port = process.env.APP_PORT || 3000;

app.use(cors({ origin: 'http://localhost:8080' }));
app.use(bodyParser.json());

app.use(
    expressjwt({
        secret:process.env.JWT_SECRET || 'default_secret',
        algorithms:['HS256']
    }).unless({
        path: ['/api-docs', /^\/api-docs\/.*/, '/login', '/status','/crops','/login/signUp',{ url:'/customers', method: 'POST' },{ url:'/seedSuppliers', method: 'POST' }],
    })
);
app.use('/customers',customerRouter);
app.use('/seedSuppliers',seedSupplierRouter);
app.use('/resources',resourceRouter);
app.use('/crops',cropRouter);
app.use('/farmer',farmerRouter);
// app.use('/login/signup',customerRouter);
app.use('/login',userRouter)

app.get('/status', (req, res) => {
    res.json({ message: 'Back-end is running...' });
});

const swaggerOpts = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Crop API',
            version: '1.0.0',
        },
    },
    apis: ['./controller/*.routes.ts'], //we tell swagger where to find the apis . in the controller folder in this case
};
const swaggerSpec = swaggerJSDoc(swaggerOpts);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use((err:Error,req:Request,res:Response,next:NextFunction)=>{
    if (err.name === 'UnauthorizedError') {
        res.status(401).json({ status: 'unauthorized', message: err.message });
    } else if (err.name === 'CropError') {
        res.status(400).json({ status: 'domain error', message: err.message });
    } else {
        res.status(400).json({ status: 'application error', message: err.message });
    }

})

app.listen(port || 3000, () => {
    console.log(`Back-end is running on port ${port}.`);
});
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

const app = express();
dotenv.config();
const port = process.env.APP_PORT || 3000;

app.use(cors({ origin: 'http://localhost:8080' }));
app.use(bodyParser.json());

app.use('/customers',customerRouter);
app.use('/seedSuppliers',seedSupplierRouter);
app.use('/resources',resourceRouter);
app.use('/crops',cropRouter);
app.use('/farmer',farmerRouter);

app.get('/status', (req, res) => {
    res.json({ message: 'Back-end is running...' });
});

const swaggerOpts = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Courses API',
            version: '1.0.0',
        },
    },
    apis: ['./controller/*.routes.ts'], //we tell swagger where to find the apis . in the controller folder in this case
};
const swaggerSpec = swaggerJSDoc(swaggerOpts);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port || 3000, () => {
    console.log(`Back-end is running on port ${port}.`);
});

app.use((err:Error,req:Request,res:Response,next:NextFunction)=>{
    res.status(400).json({status:'application error',message:err.message})

})

/**
 * @swagger
 *   components:
 *    securitySchemes:
 *     bearerAuth:
 *      type: http
 *      scheme: bearer
 *      bearerFormat: JWT
 *    schemas:
 *      SeedSupplier:
 *        type: object
 *        properties:
 *          name:
 *            type: string
 *            description: SeedSupplier name.
 *          password:
 *            type: string
 *            description: SeedSupplier password.
 *          address:
 *            type: string
 *            description: SeedSupplier address.
 *          email:
 *            type: string
 *            description: SeedSupplier email.
 *          seedType:
 *            type: Crop
 *            description: SeedSupplier seedType.
 *      seedSuppplierInput:
 *        type: object
 *        properties:
 *          name:
 *            type: string
 *            description: SeedSupplier name.
 *          password:
 *            type: string
 *            description: SeedSupplier password.
 *          address:
 *            type: string
 *            description: SeedSupplier address.
 *          email:
 *            type: string
 *            description: SeedSupplier email.
 *          seedType:
 *            type: Crop
 *            description: SeedSupplier seedType.
 */
import express, { NextFunction, Request, Response } from 'express';
import seedSupplierService from '../service/seedSupplier.service';

const seedSupplierRouter = express.Router();

/**
 * @swagger
 * /seedSuppliers:
 *   get:
 *     summary: Get a list of all seedSuppliers.
 *     responses:
 *      200:
 *        description: A list of seedSuppliers.
 *        content:
 *          application/json:
 *             schema:
 *                $ref: '#/components/schemas/SeedSupplier'
 */

seedSupplierRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try{
        const seedSupliers= await seedSupplierService.getAllseedSuppliers();
        res.status(200).json(seedSupliers);
    } catch(error){
        res.status(400).json({status:'error', errorMessage:(error as Error).message})
    }
});

/**
 * @swagger
 * /seedSuppliers:
 *   post:
 *     summary: add a new seed supplier.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/seedSuppplierInput'
 *     responses:
 *       200:
 *         description: A new user added.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/seedSuppplier'
 */


seedSupplierRouter.post('/',async(req: Request, res: Response, next: NextFunction)=>{
try {
    const result=await seedSupplierService.addSeedSupplier(req.body);
    res.status(200).json(result);

} catch (error) {
    next(error);
}
})
export { seedSupplierRouter };

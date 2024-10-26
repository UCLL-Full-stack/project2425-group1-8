/**
 * @swagger
 *   components:
 *    securitySchemes:
 *     bearerAuth:
 *      type: http
 *      scheme: bearer
 *      bearerFormat: JWT
 *    schemas:
 *      Customer:
 *          type: object
 *          properties:
 *            name:
 *              type: string
 *              description: Customer name.
 *            address:
 *              type: string
 *              description: Customer address.
 *            email:
 *              type: string
 *              description: Customer email.
 *            cropPreference:
 *              type: Crop
 *              description: Customer cropPreference.
 */
import express, { NextFunction, Request, Response } from 'express';
import customerService from '../service/customer.service';

const customerRouter = express.Router();

/**
 * @swagger
 * /customers:
 *   get:
 *     summary: Get a list of all customers.
 *     responses:
 *      200:
 *        description: A list of customers.
 *        content:
 *          application/json:
 *             schema:
 *                $ref: '#/components/schemas/Customer'
 */

customerRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try{
        const customers= await customerService.getAllCustomers();
        res.status(200).json(customers);
    } catch(error){
        res.status(400).json({status:'error', errorMessage:(error as Error).message})
    }
});

export { customerRouter };

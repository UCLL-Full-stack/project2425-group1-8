/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *   schemas:
 *     Customer:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Customer name.
 *         password:
 *           type: string
 *           description: Customer password.
 *         address:
 *           type: string
 *           description: Customer address.
 *         email:
 *           type: string
 *           description: Customer email.
 *         cropPreference:
 *           type: array
 *           items:
 *             type: Crop
 *           description: Customer crop preferences.
 *     CustomerInput:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Customer name.
 *         password:
 *           type: string
 *           description: customer password.
 *         address:
 *           type: string
 *           description: Customer address.
 *         email:
 *           type: string
 *           description: Customer email.
 *         cropPreference:
 *           type: array
 *           items:
 *             type: Crop
 *           description: Customer crop preferences.
 */

import express, { NextFunction, Request, Response } from 'express';
import customerService from '../service/customer.service';
import { CustomerInput } from '../types';
import { Customer } from '../model/customer';
import { decode } from 'punycode';

const customerRouter = express.Router();

/**
 * @swagger
 * /customers:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get a list of all customers.
 *     responses:
 *       200:
 *         description: A list of customers.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Customer'
 */
const jwt = require("jsonwebtoken");

customerRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
        try {
        const request = req as Request & {auth: {name:string; role: string}}
        const {name, role} = request.auth;
        const customers = await customerService.getAllCustomers({name,role});
        res.status(200).json(customers);
    } catch (error) {
        res.status(400).json({ status: 'error', errorMessage: (error as Error).message });
    }
});

/**
 * @swagger
 * /customers:
 *   post:
 *     summary: Add a new customer.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CustomerInput'
 *     responses:
 *       200:
 *         description: The newly added customer.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Customer'
 */

customerRouter.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const customer = <CustomerInput>req.body;
        console.log(customer);

        const result = await customerService.addCustomer(customer);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
});

/**
 * @swagger
 * /customers/{name}:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get a customer by name.
 *     parameters:
 *       - in: path
 *         name: name
 *         schema:
 *           type: string
 *         required: true
 *         description: The customer name.
 *     responses:
 *       200:
 *         description: A customer object.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Customer'
 */

customerRouter.get('/:name', async (req: Request, res: Response, next: NextFunction) => {
    try {
        
        const customer = await customerService.getCustomerByName({ name: req.params.name });
        res.status(200).json(customer);
    } catch (error) {
        next(error);
    }
});

export { customerRouter };

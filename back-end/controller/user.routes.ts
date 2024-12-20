/**
 * @swagger
 *   components:
 *    securitySchemes:
 *     bearerAuth:
 *      type: http
 *      scheme: bearer
 *      bearerFormat: JWT
 *    schemas:
 *      AuthenticationResponse:
 *          type: object
 *          properties:
 *            message:
 *              type: string
 *              description: Authentication response message.
 *            name:
 *              type: string
 *              description: User name.
 *            token:
 *              type: string
 *              description: JWT access token.
 *      AuthenticationRequest:
 *          type: object
 *          properties:
 *            name:
 *              type: string
 *              description: User name.
 *            password:
 *              type: string
 *              description: User password.
 *            role:
 *              type: string
 *              description: Role of the user.
 *              enum: [customer, farmer, seedSupplier]
 *      Customer:
 *          type: object
 *          properties:
 *            id:
 *              type: number
 *              format: int64
 *            name:
 *              type: string
 *              description: Customer name.
 *            role:
 *              type: string
 *              description: User role (always 'customer').
 *            email:
 *              type: string
 *              description: Customer email.
 *            password:
 *              type: string
 *              description: Hashed password.
 *            address:
 *              type: string
 *              description: Customer address.
 *      Farmer:
 *          type: object
 *          properties:
 *            id:
 *              type: number
 *              format: int64
 *            name:
 *              type: string
 *              description: Farmer name.
 *            role:
 *              type: string
 *              description: User role (always 'farmer').
 *            email:
 *              type: string
 *              description: Farmer email.
 *            password:
 *              type: string
 *              description: Hashed password.
 *            farmingPractice:
 *              type: string
 *              description: Description of farming practices.
 *            farmSizeInHectares:
 *              type: number
 *              format: int64
 *              description: Farm size in hectares.
 *      SeedSupplier:
 *          type: object
 *          properties:
 *            id:
 *              type: number
 *              format: int64
 *            name:
 *              type: string
 *              description: Seed Supplier name.
 *            role:
 *              type: string
 *              description: User role (always 'seedSupplier').
 *            email:
 *              type: string
 *              description: Seed Supplier email.
 *            password:
 *              type: string
 *              description: Hashed password.
 *            address:
 *              type: string
 *              description: Seed Supplier address.
 *            seedType:
 *              type: string
 *              description: Type of seeds provided.
 */

import express, { NextFunction, Request, Response } from 'express';
import userService from '../service/user.service';
import { CustomerInput, FarmerInput, SeedSupplierInput } from '../types';

const userRouter=express.Router();
/**
 * @swagger
 * /login:
 *   post:
 *      summary: Login using name/password/role. Returns an object with JWT token and user name when succesful.
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/AuthenticationRequest'
 *      responses:
 *         200:
 *            description: Authentication successful.
 *            content:
 *              application/json:
 *                schema:
 *                  $ref: '#/components/schemas/AuthenticationResponse'
 */

userRouter.post('/',
    async (req: Request , res: Response , next: NextFunction) => {
        try {
            const AuthenticationResponse=await userService.authenticate(req.body as CustomerInput | FarmerInput | SeedSupplierInput);
        res.status(200).json(AuthenticationResponse);
    } catch (error) {
        next(error);
    }
});

export {userRouter};
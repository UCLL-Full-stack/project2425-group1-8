/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *   schemas:
 *     Farmer:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Name of the farmer.
 *         email:
 *           type: string
 *           description: Email of the farmer.
 *         farmingPractice:
 *           type: string
 *           description: Farming practice of the farmer.
 *         farmSizeInHectares:
 *           type: number
 *           description: Farm size of the farmer.
 */

import express, { NextFunction, Request, Response } from 'express';
import farmerService from '../service/farmer.service';

const farmerRouter = express.Router();

/**
 * @swagger
 * /farmer:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get a farmer by email.
 *     parameters:
 *       - in: query
 *         name: email
 *         schema:
 *           type: string
 *           required: true
 *           description: The farmer's email.
 *     responses:
 *       200:
 *         description: A farmer object.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Farmer'
 */

farmerRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const email = req.query.email as string;
        const farmer = await farmerService.getFarmer(email);
        res.status(200).json(farmer);
    } catch (error) {
        res.status(400).json({ status: 'error', errorMessage: (error as Error).message });
    }
});

export { farmerRouter };

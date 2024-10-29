/**
 * @swagger
 *   components:
 *    securitySchemes:
 *     bearerAuth:
 *      type: http
 *      scheme: bearer
 *      bearerFormat: JWT
 *    schemas:
 *      Crop:
 *          type: object
 *          properties:
 *            name:
 *              type: string
 *              description: Crop name.
 *            purchasePrice:
 *              type: number
 *              description: crop purchase price.
 *            marketPrice:
 *              type: number
 *              description: Crop market price.
 *            attentionRange:
 *              type: number
 *              description: Crop attention range.
 *            growthDuration:
 *              type: number
 *              description: Crop growth duration.
 */

import express, { NextFunction, Request, Response } from 'express';
import cropService from '../service/crop.service';


const cropRouter = express.Router();

/**
 * @swagger
 * /crops:
 *   get:
 *     summary: Get a list of all crops.
 *     responses:
 *      200:
 *        description: A list of crops.
 *        content:
 *          application/json:
 *             schema:
 *                $ref: '#/components/schemas/Crop'
 */

cropRouter.get('/',async(req: Request, res: Response, next: NextFunction) => {
    try{
        const crops= await cropService.getAllCrops();
        res.status(200).json(crops);
    } catch(error){
        res.status(400).json({status:'error', errorMessage:(error as Error).message})
    }
});

export { cropRouter };
/**
 * @swagger
 *   components:
 *    securitySchemes:
 *     bearerAuth:
 *      type: http
 *      scheme: bearer
 *      bearerFormat: JWT
 *    schemas:
 *      Farmer:
 *          type: object
 *          parameters:
 *              name:
 *                  type:string
 *                  description:name of farmer.
 *              email:
 *                   type:string
 *                   description:email of the farmer.
 *              farmingPractice:
 *                   type:string
 *                   description:farming practice of the farmer
 *              farmSize:
 *                   type:number
 *                   description:farm size of the farmer
 */

import express, { NextFunction, Request, Response } from 'express';
import farmerService from '../service/farmer.service';

const farmerRouter=express.Router();

/**
 * @swagger
 * /farmer:
 *    get:
 *      summary: Get the logged in farmer.
 *      responses:
 *        200:
 *          description: A farmer
 *          content:
 *             application/json:
 *                 schema:
 *                    $ref: '#/components/schemas/farmer'
 */

farmerRouter.get('/',async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const farmer=await farmerService.getFarmer();
        res.status(200).json(farmer);
    } catch (error) {
        res.status(400).json({status:'error',errorMessage:(error as Error).message})
    }
});

export {farmerRouter};
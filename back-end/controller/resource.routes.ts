/**
 * @swagger
 *   components:
 *    securitySchemes:
 *     bearerAuth:
 *      type: http
 *      scheme: bearer
 *      bearerFormat: JWT
 *    schemas:
 *      Resource:
 *          type: object
 *          properties:
 *            name:
 *              type: string
 *              description: Resource name.
 *            manufacturer:
 *              type: string
 *              description: Resource manufacturer.
 *            service_duration:
 *              type: int
 *              description: Resource service_duration.
 *            service_start_date:
 *              type: Date
 *              description: Resource service_start_date.
 */
import express, { NextFunction, Request, Response } from 'express';
import customerService from '../service/customer.service';
import resourceService from '../service/resource.service';

const resourceRouter = express.Router();

/**
 * @swagger
 * /resources:
 *   get:
 *     summary: Get a list of all resources.
 *     responses:
 *      200:
 *        description: A list of resources.
 *        content:
 *          application/json:
 *             schema:
 *                $ref: '#/components/schemas/Resource'
 */

resourceRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try{
        const resources= await resourceService.getAllResources();
        res.status(200).json(resources);
    } catch(error){
        res.status(400).json({status:'error', errorMessage:(error as Error).message})
    }
});

export { resourceRouter };

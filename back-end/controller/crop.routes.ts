import express, { NextFunction, Request, Response } from 'express';
import cropService from '../service/crop.service';

const cropRouter = express.Router();

/**
 * @swagger
 * /crops:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get a list of all crops.
 *     responses:
 *       200:
 *         description: A list of crops.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Crop'
 */
cropRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const crops = await cropService.getAllCrops();
        res.status(200).json(crops);
    } catch (error) {
        res.status(400).json({ status: 'error', errorMessage: (error as Error).message });
    }
});

/**
 * @swagger
 * /crops/{id}:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get a crop by id.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The crop id.
 *     responses:
 *       200:
 *         description: A crop object.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Crop'
 */
cropRouter.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const crop = await cropService.getCropById(Number(req.params.id));
        res.status(200).json(crop);
    } catch (error) {
        next(error);
    }
});

/**
 * @swagger
 * /crops/{id}:
 *   put:
 *     security:
 *       - bearerAuth: []
 *     summary: Update a crop by id.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The crop id.
 *       - in: body
 *         name: crop
 *         description: The updated crop object.
 *         required: true
 *         content:
 *           application/json:
 *           schema:
 *             $ref: '#/components/schemas/Crop'
 *     responses:
 *       200:
 *         description: The updated crop object.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Crop'
 */
cropRouter.put('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const updatedCrop = req.body;
        const crop = await cropService.updateCrop(Number(req.params.id), updatedCrop);
        if (!crop) {
            res.status(404).json({ message: 'Crop not found' });
        } else {
            res.status(200).json(crop);
        }
    } catch (error) {
        next(error);
    }
});

/**
 * @swagger
 * /crops/{id}:
 *   delete:
 *     security:
 *       - bearerAuth: []
 *     summary: Delete a crop by id.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The crop id.
 *     responses:
 *       200:
 *         description: Crop successfully deleted.
 */
cropRouter.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await cropService.deleteCrop(Number(req.params.id));
        if (result) {
            res.status(200).json({ message: 'Crop successfully deleted' });
        } else {
            res.status(404).json({ message: 'Crop not found' });
        }
    } catch (error) {
        next(error);
    }
});

export { cropRouter };

const express = require('express');
const {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
} = require('../controllers/workoutController');

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Workout:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *         reps:
 *           type: integer
 *         load:
 *           type: integer
 *       required:
 *         - title
 *         - reps
 *         - load
 *       example:
 *         title: Push ups
 *         reps: 40
 *         load: 5
 */

/**
 * @swagger
 * /api/workouts:
 *   get:
 *     summary: Get all workouts
 *     tags: [Workouts]
 *     responses:
 *       200:
 *         description: A list of workouts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Workout'
 */
router.get('/', getWorkouts);

/**
 * @swagger
 * /api/workouts/{id}:
 *   get:
 *     summary: Get a single workout
 *     tags: [Workouts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The id of the workout to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The requested workout
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Workout'
 *       404:
 *         description: No workout found with the given id
 */
router.get('/:id', getWorkout);

/**
 * @swagger
 * /api/workouts:
 *   post:
 *     summary: Create a new workout
 *     tags: [Workouts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - reps
 *               - load
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the workout
 *               reps:
 *                 type: integer
 *                 description: The number of repetitions for the workout
 *               load:
 *                 type: integer
 *                 description: The load (weight) used in the workout
 *     responses:
 *       201:
 *         description: The created workout
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Workout'
 *       400:
 *         description: Bad request
 */
router.post('/', createWorkout);

/**
 * @swagger
 * /api/workouts/{id}:
 *   delete:
 *     summary: Delete a workout
 *     tags: [Workouts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The id of the workout to delete
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: No content, workout deleted successfully
 *       400:
 *         description: No workout found with the given id
 */
router.delete('/:id', deleteWorkout);

/**
 * @swagger
 * /api/workouts/{id}:
 *   patch:
 *     summary: Update a workout
 *     tags: [Workouts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The id of the workout to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               reps:
 *                 type: integer
 *               load:
 *                 type: integer
 *     responses:
 *       200:
 *         description: The updated workout
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Workout'
 *       400:
 *         description: No workout found with the given id
 */
router.patch('/:id', updateWorkout);

module.exports = router;

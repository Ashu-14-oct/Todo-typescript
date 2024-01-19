import express from "express";
import { home, getAllTasks, createTask, updateTask, deleteTask } from "../controller/Controller";
const router = express.Router();

router.get('/', home);
/**
 * @swagger
 * /task:
 *   get:
 *     summary: Get all tasks
 *     description: Retrieves a list of all tasks.
 *     responses:
 *       '200':
 *         description: A successful response with the list of tasks.
 *       '500':
 *         description: Internal server error.
 */
router.get('/task', getAllTasks);
/**
 * @swagger
 * /task:
 *   post:
 *     summary: Create a new task
 *     description: Creates a new task with the provided details.
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Task created successfully.
 *       '500':
 *         description: Internal server error.
 */
router.post('/task', createTask);
/**
 * @swagger
 * /task/{id}:
 *   put:
 *     summary: Update a task
 *     description: Updates an existing task with the provided details.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the task to be updated.
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Task updated successfully.
 *       '500':
 *         description: Internal server error.
 */

router.put('/task/:id', updateTask);

/**
 * @swagger
 * /task/{id}:
 *   delete:
 *     summary: Delete a task
 *     description: Deletes an existing task.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the task to be deleted.
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Task deleted successfully.
 *       '500':
 *         description: Internal server error.
 */
router.delete('/task/:id', deleteTask);


export default router;
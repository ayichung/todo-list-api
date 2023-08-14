import tasks from '../queries/tasks.js';
import express from 'express';
const router = express.Router();

router.get('/', async function(req, res) {
    const taskList = await tasks.getTasks();
    res.status(200).json(taskList);
});

export default router;
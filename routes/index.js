import tasks from '../queries/tasks.js';
import express from 'express';
const router = express.Router();

router.get('/', async function(req, res) {
    const taskList = await tasks.getTasks();
    res.status(200).json(taskList);
});

router.get('/:id', async function(req, res) {
    const task = await tasks.getTaskById(req.params.id);
    res.status(200).json(task);
})

// post

// put

// delete

export default router;
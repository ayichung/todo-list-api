import tasks from '../queries/tasks.js';
import express from 'express';
const router = express.Router();

router.get('/', async function(req, res) {
    try {
        const taskList = await tasks.getTasks();
        res.status(200).json(taskList);
    }
    catch (error) {
        res.status(error.status || 500).send({ message: error.message });
    }
});

router.get('/:id', async function(req, res) {
    try {
        const task = await tasks.getTaskById(req.params.id);
        res.status(200).json(task);
    }
    catch (error) {
        res.status(error.status || 500).send({ message: error.message });
    }
})

// post
router.post('/', async function(req, res) {
    try {
        const id = await tasks.addTask(req.body.name);
        res.status(200).send(id);
    }
    catch (error) {
        res.status(error.status || 500).send({ message: error.message });
    }
})

// put

// delete

export default router;
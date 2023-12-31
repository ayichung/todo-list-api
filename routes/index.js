import tasks from '../queries/tasks.js';
import express from 'express';
const router = express.Router();

router.get('/', async (req, res) => {
        try {
            const taskList = await tasks.getTasks();
            res.status(200).json(taskList);
        }
        catch (error) {
            res.status(error.status || 500).send({ message: error.message });
        }
    });

router.get('/:id', async (req, res) => {
        try {
            const task = await tasks.getTaskById(req.params.id);
            res.status(200).json(task);
        }
        catch (error) {
            res.status(error.status || 500).send({ message: error.message });
        }
    })

// post
router.post('/', async (req, res) => {
        try {
            const id = await tasks.postTask(req.body.name);
            res.status(200).send(id);
        }
        catch (error) {
            res.status(error.status || 500).send({ message: error.message });
        }
    })

// put
router.put('/:id', async (req, res) => {
        try {
            const id = await tasks.putTask(req.params.id, req.body.name, req.body.status);
            res.status(200).send(id);
        }
        catch (error) {
            res.status(error.status || 500).send({ message: error.message });
        }
    })

// delete
router.delete('/:id', async (req, res) => {
        try {
            const id = await tasks.deleteTask(req.params.id);
            res.status(200).send(id);
        }
        catch (error) {
            res.status(error.status || 500).send({ message: error.message });
        }
    })

export default router;
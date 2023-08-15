import dotenv from 'dotenv';
import pgPromise from 'pg-promise';
dotenv.config();
const pgp = pgPromise();
const db = pgp(process.env.DATABASE_URL);

const getTasks = async () => {
    const res = await db.any('SELECT * FROM tasks');
    return res;
}

const getTaskById = async (id) => {
    const res = await db.one('SELECT * FROM tasks WHERE id = $1', [id]);
    return res;
}

const postTask = async (name) => {
    const res = await db.one('INSERT INTO tasks (name) VALUES ($1) RETURNING id', [name]);
    return res;
}

const putTask = async (id, name, status) => {
    const res = await db.one('UPDATE tasks SET name = $1, status = $2 WHERE id = $3 RETURNING id', [name, status, id]);
    return res;
}

const deleteTask = async function(id) {
    const res = await db.one('DELETE FROM tasks WHERE id = $1 RETURNING id', [id]);
    return res;
}

const tasks = {
    getTasks,
    getTaskById,
    postTask,
    putTask,
    deleteTask
};

export default tasks;
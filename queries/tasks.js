import dotenv from 'dotenv';
import pgPromise from 'pg-promise';
dotenv.config();
const pgp = pgPromise();
const db = pgp(process.env.DATABASE_URL);

const getTasks = async function() {
    const res = await db.any('SELECT * FROM tasks');
    return res;
}

const tasks = {
    getTasks,
};

export default tasks;
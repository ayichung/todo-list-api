import dotenv from 'dotenv';
import pgPromise from 'pg-promise';
const pgp = pgPromise();
const db = pgp(process.env.DATABASE_URL);
dotenv.config();

const tasks = {

};

export default tasks;
/* بسم الله الرحمن الرحيم */

import { Pool } from "pg";
import dotenv from "dotenv";
dotenv.config();

const { HOST, DB, DB_USER, DB_PASSWORD, PORT } = process.env;

const Client = new Pool({
    host: HOST,
    database: DB,
    user: DB_USER,
    password: DB_PASSWORD,
    port: parseInt(PORT as string)
})

export default Client;

/* الحمد لله رب العالين */
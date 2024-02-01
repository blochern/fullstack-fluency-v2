// main server file
import express from 'express';
import dotenv from 'dotenv';
import pkg from 'pg';

const app = express();

dotenv.config();

const { Pool } = pkg;
const pool = new Pool({
    connectionString: process.env.database_url
});

pool.query("select * from inventory")
    .then((results) => {
        console.log(results.rows);
    });

app.listen(process.env.port, () => {
    console.log("Main.js running, listening on port " + process.env.port);
});
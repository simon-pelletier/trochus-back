require ('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
    host: process.env.PG_HOST,
    user: process.env.PG_USER,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
});

module.exports = {
    query: (text, params, callback) => {
        return pool.query(text, params, callback);
    },
    connect: (err, client, done) => {
        return pool.connect(err, client, done);
    },
};
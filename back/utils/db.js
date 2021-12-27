const mysql = require("promise-mysql");

const host = process.env.HOST_DB;
const database = process.env.DATABASE_DB;
const user = process.env.USER_DB;
const password = process.env.PASSWORD_DB;
const port = process.env.DB_PORT;

// connexion BDD
const db = async () => {
  return await mysql.createConnection({
    host,
    database,
    user,
    password,
    port,
  });
};

module.exports = db;

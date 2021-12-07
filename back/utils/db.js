const mysql = require("promise-mysql");

// switch later
if (!process.env.HOST_DB) {
  var config = require("../config");
} else {
  var config = require("../config-exemple");
}

const host = process.env.HOST_DB || config.db.host;
const database = process.env.DATABASE_DB || config.db.database;
const user = process.env.USER_DB || config.db.user;
const password = process.env.PASSWORD_DB || config.db.password;
const port = process.env.PORT || config.db.port;

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

require("dotenv").config();

//test

// module.exports = {
//   db: {
//     host: "db5006030753.hosting-data.io",
//     database: "dbs5051889",
//     user: "dbu1943125",
//     password: process.env.PASSWORD_BDD,
//     port: "3306",
//   },
//   token: {
//     secret: "saucissemerguez",
//   },
// };

module.exports = {
  db: {
    host: "localhost",
    database: "e-pottery",
    user: "root",
    password: "",
  },
  token: {
    secret: "saucissemerguez",
  },
};

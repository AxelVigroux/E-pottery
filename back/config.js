require("dotenv").config();

module.exports = {
  db: {
    host: "eu-cdbr-west-02.cleardb.net",
    user: "b38ba1bae3e1df",
    password: "aa160da8",
    database: "heroku_1ce835d09544bbc",
  },
  token: {
    secret: "saucissemerguez",
  },
};

// // mysql://b38ba1bae3e1df:aa160da8@eu-cdbr-west-02.cleardb.net/heroku_1ce835d09544bbc?reconnect=true

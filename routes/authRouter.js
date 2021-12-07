const withAuth = require("../withAuth");
const jwt = require("jsonwebtoken");
const secret = config.token.secret;

module.exports = (app, db) => {
  const userModel = require("../models/UserModel")(db);

  app.get("/user/checkToken", withAuth, async (req, res) => {
    let user = await userModel.getOneUser(req.email);
    console.log(user);
    res.json({ status: 200, message: "Token OK", user: user });
  });
};

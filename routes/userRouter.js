const bcrypt = require("bcrypt");
const router = require("express").Router();
const UserModel = require("../models/UserModel");
const jwt = require("jsonwebtoken");
let config = require("../config");
let secret = config.token.secret;
const withAuth = require("../withAuth");

//GET USER BY ID
router.get("/user/:id", async (req, res) => {
  const id = req.params.id;

  let user = await UserModel.getOneUser(id);

  if (user.code) {
    res.json({ satus: 500, error: user });
  }
  res.json({ satus: 200, results: user });
});

// GET ALL USERS
router.get("/users", async (req, res) => {
  let users = await UserModel.getAllUsers();

  if (users.code) {
    res.json({ status: 500, error: users });
  }
  res.json({ status: 200, results: users });
});

// REGISTER NEW USER
router.post("/user/register", async (req, res) => {
  let newUser = await UserModel.saveOneUser(req);

  if (newUser.code) {
    res.json({ status: 500, error: newUser });
  }
  res.json({ satuts: 200, results: newUser });
});

// LOGIN
router.post("/user/login", async (req, res) => {
  let user = await UserModel.loginUser(req);

  if (user.length === 0) {
    res.json({ status: 404, message: "Email not found" });
  } else {
    let samePassword = await bcrypt.compare(
      req.body.password,
      user[0].password
    );
    if (samePassword) {
      let infos = { id: user[0].id, email: user[0].email };
      let token = jwt.sign(infos, secret);

      res.json({
        status: 200,
        msg: "Connexion Ok !",
        token: token,
        user: user[0],
      });
    } else {
      res.json({ status: 401, message: "Wrong Password" });
    }
  }
});

// UPDATE USER
router.put("/user/update/:id", withAuth, async (req, res) => {
  let id = req.params.id;

  let user = await UserModel.updateUser(id, req);

  res.json({ status: 200, result: user });
});

module.exports = router;

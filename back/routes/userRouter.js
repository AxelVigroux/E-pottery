const bcrypt = require("bcrypt");
const router = require("express").Router();
const UserModel = require("../models/UserModel");
const jwt = require("jsonwebtoken");
const config = require("../config");
let secret = config.token.secret;

const withAuth = require("../withAuth");
const sendMail = require("../utils/mailer");

//GET USER BY ID
router.get("/user/:id", async (req, res) => {
  const id = req.params.id;

  let user = await UserModel.getOneUser(id);

  if (user.code) {
    res.json({ satus: 500, error: user });
  }
  res.json({ satus: 200, results: user });
});

/** GET CREATORS */
router.get("/users/creators/", async function (req, res) {
  const creators = await UserModel.getCreators();

  if (creators.code) {
    res.json({ status: 500, error: creators });
  }
  res.json({ status: 200, results: creators });
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

  if (user.code) {
    res.json({ status: 500, error: user });
  }
  res.json({ satuts: 200, results: user });
});

router.post("/contact", function (req, res) {
  const to = "axelvigroux@gmail.com";
  const from = req.body.name;
  const subject = "Contact message from Epottery";
  const message = req.body.email + "</br>" + req.body.message;

  sendMail(to, from, subject, message)
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch((err) => {
      res.json(err.message);
    });
});

router.post("/user/newsletter", async function (req, res) {
  const subscriber = await UserModel.newsletterSubscribe(req);
  const to = req.body.mail;
  const from = "axelvigroux@gmail.com";
  const subject = "Epottery's newsletter";
  const html = "Welcome among us !";

  if (subscriber.code) {
    console.log("SUB", subscriber);
    res.json({ status: 500, message: subscriber });
  }
  sendMail(to, from, subject, html)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err.message);
    });
});

module.exports = router;

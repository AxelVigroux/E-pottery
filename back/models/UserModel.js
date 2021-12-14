const bcrypt = require("bcrypt");
const saltRounds = 10;
const db = require("../utils/db");

class UserModel {
  static async saveOneUser(req) {
    return bcrypt
      .hash(req.body.password, saltRounds)
      .then(async function (hash) {
        const connexion = await db();

        let checkEmail = await connexion.query(
          "SELECT * FROM users WHERE email = ?",
          [req.body.email]
        );

        if (checkEmail.length > 0) {
          return { status: 501, error: "Email already used" };
        }
        return connexion
          .query(
            "INSERT INTO users (role, firstName, lastName, email, password, address, zip, city, phone, description, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ? , ?, ?, NOW())",
            [
              req.body.role,
              req.body.firstName,
              req.body.lastName,
              req.body.email,
              hash,
              req.body.address,
              req.body.zip,
              req.body.city,
              req.body.phone,
              req.body.description,
            ]
          )
          .then((result) => {
            console.log(result);
            return result;
          })
          .catch((err) => {
            return err;
          })
          .finally(() => {
            connexion.end();
          });
      });
  }

  static async getOneUser(id) {
    const connexion = await db();

    return connexion
      .query("SELECT * FROM users WHERE id  = ?", [id])
      .then((user) => {
        return user;
      })
      .catch((err) => {
        return err;
      })
      .finally(() => {
        connexion.end();
      });
  }

  static async getAllUsers() {
    const connexion = await db();

    return connexion
      .query("SELECT * FROM users")
      .then((users) => {
        return users;
      })
      .catch((err) => {
        return err;
      })
      .finally(() => {
        connexion.end();
      });
  }

  static async loginUser(req) {
    const connexion = await db();

    return connexion
      .query("SELECT * FROM users WHERE email = ?", [req.body.email])
      .then((user) => {
        console.log(user);

        if (user.length === 0) {
          return {
            status: 401,
            error: "Email incorrect",
          };
        } else {
          return user;
        }
      })
      .catch((err) => {
        return err;
      })
      .finally(() => {
        connexion.end;
      });
  }

  static async updateUser(id, req) {
    const connexion = await db();

    return connexion
      .query(
        "UPDATE users SET role = ?, firstName = ?, lastName = ?, email = ?, address = ?, zip = ?, city = ?, phone = ?,description = ?, updated_at = NOW()  WHERE id = ?",
        [
          req.body.role,
          req.body.firstName,
          req.body.lastName,
          req.body.email,
          req.body.address,
          req.body.zip,
          req.body.city,
          req.body.phone,
          req.body.description,
          id,
        ]
      )
      .then((user) => {
        return user;
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        connexion.end;
      });
  }

  static async newsletterSubscribe(req) {
    const connexion = await db();

    return connexion
      .query("INSERT INTO newsletter (mail, created_at) VALUES (?, NOW())", [
        req.body.mail,
      ])
      .then((subscriber) => {
        return subscriber;
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        connexion.end;
      });
  }

  static async getCreators() {
    const connexion = await db();
    return connexion
      .query("SELECT * FROM users WHERE role  = 'creator'")
      .then((creators) => {
        return creators;
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        connexion.end;
      });
  }
}
module.exports = UserModel;

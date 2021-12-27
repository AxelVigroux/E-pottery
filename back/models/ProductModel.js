const db = require("../utils/db");

class ProductsModel {
  static async getAllProduct() {
    const connexion = await db();

    return connexion
      .query("SELECT * FROM products")
      .then((products) => {
        return products;
      })
      .catch((err) => {
        console.log(err);
        return err;
      })
      .finally(() => {
        connexion.end();
      });
  }

  static async getOneProduct(id) {
    const connexion = await db();

    return connexion
      .query("SELECT * FROM products WHERE id = ?", [id])
      .then((product) => {
        return product;
      })
      .catch((err) => {
        return err;
      })
      .finally(() => {
        connexion.end();
      });
  }

  //   SELECT *
  // FROM clients
  // INNER JOIN commandes ON clients.id = commandes.id_client;

  static async getProductByUserId(user_id) {
    const connexion = await db();

    return connexion
      .query(
        "SELECT * FROM users INNER JOIN products ON users.id = products.user_id WHERE user_id = ?",
        [user_id]
      )
      .then((products) => {
        return products;
      })
      .catch((err) => {
        return err;
      })
      .finally(() => {
        connexion.end();
      });
  }

  static async saveOneProduct(req) {
    const connexion = await db();

    return connexion
      .query(
        "INSERT INTO products (name, description, picture, price, category, user_id, creator_name, created_at) VALUES ( ?,  ?, ?, ?,  ?, ?, ?, NOW())",
        [
          req.body.name,
          req.body.description,
          req.body.picture,
          req.body.price,
          req.body.category,
          req.body.user_id,
          req.body.creator_name,
        ]
      )
      .then((result) => {
        console.log("SAVEONEPRODUCT MODEL", result);
        return result;
      })
      .catch((err) => {
        return err;
      })
      .finally(() => {
        connexion.end();
      });
  }

  static async updateOneProduct(id) {
    const connexion = await db();

    return connexion
      .query(
        "UPDATE products SET name = ?, description = ?, picture = ?, price = ?, category = ?, WHERE id = ?",
        [
          req.body.name,
          req.body.description,
          req.body.picture,
          req.body.price,
          req.body.category,
          id,
        ]
      )
      .then((response) => {
        return response;
      })
      .catch((err) => {
        return err;
      })
      .finally(() => {
        connexion.end();
      });
  }

  static async deleteOneProduct(id) {
    const connexion = await db();

    return connexion
      .query("DELETE FROM products WHERE id = ?", [id])
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err;
      })
      .finally(() => {
        connexion.end();
      });
  }

  static async updatePicture(req) {
    const connexion = await db();

    return connexion
      .query("UPDATE products SET picture = ? WHERE id = ?", [
        req.body.picture,
        req.body.id,
      ])
      .then((response) => {
        console.log("RESULT PRODUCT MODEL UPDATA PICTURE", response);
        return response;
      })
      .catch((err) => {
        return err;
      })
      .finally(() => {
        connexion.end();
      });
  }
}

module.exports = ProductsModel;

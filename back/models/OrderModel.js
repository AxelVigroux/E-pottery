const db = require("../utils/db");

class OrderModel {
  static async saveOneOrder(customer_id, total) {
    const connexion = await db();

    console.log("router trigger ?");
    return connexion
      .query(
        "INSERT INTO orders (customer_id, total, status, created_at) VALUES (?, ?,'not payed', NOW())",
        [customer_id, total]
      )
      .then((result) => {
        console.log("RESULT ORDER MODEL", result);
        return result;
      })
      .catch((err) => {
        console.log(err);
        return err;
      })
      .finally(() => {
        connexion.end();
      });
  }
}

module.exports = OrderModel;

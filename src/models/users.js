const dbConnection = require("../database/db_connection");
const getAllUsers = cb => {
  dbConnection.query("SELECT * FROM users", (err, res) => {
    if (err) return cb(err);
    cb(null, res.rows);
  });
};

const getUserById = (userId, cb) => {
  dbConnection.query(
    "SELECT * FROM users WHERE user_id = ($1) ",
    [userId],
    (err, res) => {
      if (err) return cb(err);
      cb(null, res.rows);
    }
  );
};
const getUserByNamePass = (userName, userPass, cb) => {
  dbConnection.query(
    "SELECT user_id FROM users WHERE user_name = ($1) AND user_pass = ($2)",
    [userName, userPass],
    (err, res) => {
      if (err) return cb(err);
      cb(null, res.rows);
    }
  );
};
module.exports = {
  getAllUsers,
  getUserById,
  getUserByNamePass
};

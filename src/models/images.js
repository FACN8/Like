const dbConnection = require("../database/db_connection");
const getAllImages = cb => {
  dbConnection.query("SELECT * FROM images", (err, res) => {
    if (err) return cb(err);
    cb(null, res.rows);
  });
};

const getCategoryImages = (category, cb) => {
  dbConnection.query(
    "SELECT * FROM images WHERE img_category = ($1)",
    [category],
    (err, res) => {
      if (err) return cb(err);
      cb(null, res.rows);
    }
  );
};

module.exports = {
  getAllImages,
  getCategoryImages
};

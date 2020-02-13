const dbConnection = require("../database/db_connection")

const getLiked = (userId,cb) => {
    dbConnection.query("SELECT img_info,img_url,img_category FROM images INNER JOIN liked_pic ON liked_pic.img_id = images.img_id INNER JOIN users ON ($1) = liked_pic.user_id;",[userId], (err, res) => {
      if (err) return cb(err);
      cb(null, res.rows);
    });
  };

  const postLiked = (img_id, user_id, cb) => {
    dbConnection.query(
      "insert into liked_pic(img_id,user_id) values ($1,$2)",
      [img_id, user_id],
      (err, res) => {
        if (err) return cb(err);
        cb(null, res.rows);
      }
    );
  };

  module.exports = {
    getLiked,
    postLiked
  }

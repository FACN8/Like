const dataModel = require("../models");
const fs = require("fs");

const getUserProfilePage = (req, res) => {
  fs.readFile("./userId.json", "utf8", (err, jsonString) => {
    if (err) {
      res.render("error", {
        title: "LIKE | Error",
        status: "500",
        message:
          "There is an error in server creating file contact the owner now."
      });
    }
    const id = JSON.parse(jsonString).id;
    dataModel.users.getUserById(id, (err, userData) => {
      if (err) {
        res.render("error", {
          title: "LIKE | Error",
          status: "404",
          message: "There is an error in handling user ID not found."
        });
      }
      dataModel.liked_pic.getLiked(id, (err, data) => {
        if (err) {
          res.render("error", {
            title: "LIKE | Error",
            status: "404",
            message: "There is an error in handling user ID data."
          });
        }
        res.render("userProfile", {
          title: "LIKE | Users",
          userData,
          data,
          id
        });
      });
    });
  });
};
const checkUser = (req, res) => {
  const userName = req.body.user_name;
  const password = req.body.user_pass;

  dataModel.users.getUserByNamePass(userName, password, (err, data) => {
    if (err) {
      res.redirect("/login");
    }
    const jsonString = JSON.stringify({ id: data[0].user_id });
    fs.writeFile("./userId.json", jsonString, err => {
      if (err) {
        res.render("error", {
          title: "LIKE | Error",
          status: "500",
          message:
            "There is an error in server creating file contact the owner now."
        });
      } else {
        if (data.length) {
      
          res.render("home", {
            id: data[0].user_id
          });
        } else {
          res.render("login", {
            title: "LIKE | Users",
            error: "Wrong Password or Username"
          });
        }
      }
    });
  });
};

const likedImg = (req, res) => {
  const img_id = req.body.imgId;
  const user_id = req.body.userId;
  dataModel.liked_pic.postLiked(img_id, user_id, (err, data) => {
    if (err) {
      res.redirect("/home");
    }
    res.render("home", {
      id: 1
    });
  });
};

module.exports = {
  getUserProfilePage,
  checkUser,
  likedImg
};

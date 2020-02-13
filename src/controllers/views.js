const fs = require("fs");

const getHomePage = (req, res) => {
  res.render("home", { title: "LIKE | HOME", id: 1 });
};

const getLandingPage = (req, res) => {
  fs.writeFile("./userId.json", {}, err => {
    if (err) {
      res.render("error", {
        title: "LIKE | Error",
        status: "500",
        message:
          "There is an error in server creating file contact the owner now."
      });
    } else {
      res.render("landing", {
        title: "Welcome To LIKE"
      });
    }
  });
};

const getLoginPage = (req, res) => {
  fs.writeFile("./userId.json", {}, err => {
    if (err) {
      res.render("error", {
        title: "LIKE | Error",
        status: "500",
        message:
          "There is an error in server creating file contact the owner now."
      });
    } else {
      res.render("login", { title: "LIKE | LogIn" });
    }
  });
};

module.exports = { getHomePage, getLandingPage, getLoginPage };

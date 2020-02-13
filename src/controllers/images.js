const dataModel = require("../models");
const fs = require("fs");

const getAnimals = (req, res) => {
  fs.readFile("./userId.json", "utf8", (err, jsonString) => {
    if (err) {
      res.render("error", {
        title: "LIKE | Error",
        status: "500",
        message:
          "There is an error in server creating file contact the owner now."
      });
    } else {
      const id = JSON.parse(jsonString).id;
      dataModel.images.getCategoryImages("Animals", (err, data) => {
        if (err) {
          res.render("error", {
            title: "LIKE | Error",
            status: "500",
            message:
              "There is an error in handling with our Animals images database"
          });
        }
        res.render("home", { title: "LIKE | Animals", data: data, id });
      });
    }
  });
};

const getFlowers = (req, res) => {
  fs.readFile("./userId.json", "utf8", (err, jsonString) => {
    if (err) {
      res.render("error", {
        title: "LIKE | Error",
        status: "500",
        message:
          "There is an error in server creating file contact the owner now."
      });
    } else {
      const id = JSON.parse(jsonString).id;
      dataModel.images.getCategoryImages("flowers", (err, data) => {
        if (err) {
          res.render("error", {
            title: "LIKE | Error",
            status: "500",
            message:
              "There is an error in handling with our Flowers images database"
          });
        }
        res.render("home", { title: "LIKE | Flowers", data: data, id });
      });
    }
  });
};

const getCars = (req, res) => {
  fs.readFile("./userId.json", "utf8", (err, jsonString) => {
    if (err) {
      res.render("error", {
        title: "LIKE | Error",
        status: "500",
        message:
          "There is an error in server creating file contact the owner now."
      });
    } else {
      const id = JSON.parse(jsonString).id;
      dataModel.images.getCategoryImages("Cars", (err, data) => {
        if (err) {
          res.render("error", {
            title: "LIKE | Error",
            status: "500",
            message:
              "There is an error in handling with our Cars images database"
          });
        }
        res.render("home", { title: "LIKE | Cars", data: data, id });
      });
    }
  });
};

module.exports = {
  getFlowers,
  getAnimals,
  getCars
};

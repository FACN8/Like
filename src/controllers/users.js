const dataModel = require('../models');

const getUserProfilePage = (req, res) => {
  dataModel.users.getUserById(1, (err, userData) => {
    if (err) console.log(err);
    dataModel.liked_pic.getLiked(1, (err, data) => {
      if (err) console.log(err);
  
    res.render('userProfile', { title: 'LIKE | Users', userData ,data});
  });
  });
};
const checkUser = (req, res) => {
  const userName = req.body.user_name;
  const password = req.body.user_pass;
  dataModel.users.getUserByNamePass(userName, password, (err, data) => {
    if (err) {
      res.redirect('/login');
    }

    if (data.length) {
      res.render('home', {
        id: data[0].user_id
      });
    } else {
      res.render('login', {
        title: 'LIKE | Users',
        error: 'Wrong Password or Username'
      });
    }
  });
};

const likedImg = (req, res) => {
  const img_id = req.body.imgId;
  const user_id = req.body.userId;
  dataModel.liked_pic.postLiked(img_id, user_id, (err, data) => {
    if (err) {
      res.redirect('/home');
    } 
    console.log(data)
      res.render('home', {
        id: 1
      });
       
  });
};

module.exports = {
  getUserProfilePage,
  checkUser,
  likedImg
};

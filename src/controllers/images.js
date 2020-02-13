const dataModel = require('../models');

const getAnimals = (req, res) => {
  dataModel.images.getCategoryImages('Animals', (err, data) => {
    if (err){res.render('error', { title: 'LIKE | Error', status:'500' ,message:'There is an error in handling with our Animals images database'});};
    res.render('home', { title: 'LIKE | Animals', data: data,id:1 });
  });
};

const getFlowers = (req, res) => {
  dataModel.images.getCategoryImages('flowers', (err, data) => {
    if (err){res.render('error', { title: 'LIKE | Error', status:'500' ,message:'There is an error in handling with our Flowers images database'});};
    res.render('home', { title: 'LIKE | Flowers', data: data ,id:1});
  });
};

const getCars = (req, res) => {
  dataModel.images.getCategoryImages('Cars', (err, data) => {
    if (err){res.render('error', { title: 'LIKE | Error', status:'500' ,message:'There is an error in handling with our Cars images database'});};
    res.render('home', { title: 'LIKE | Cars', data: data,id:1 });
  });
};

module.exports = {
  getFlowers,
  getAnimals,
  getCars
};

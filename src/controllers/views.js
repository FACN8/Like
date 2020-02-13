const getHomePage = (req, res) => {
  res.render('home', { title: 'LIKE | HOME',id:1 });
};

const getLandingPage = (req, res) => {
  res.render("landing", {
    title: "Welcome To LIKE"
  });
};

const getLoginPage = (req, res) => {
  res.render('login', { title: 'LIKE | LogIn'});
};

module.exports = { getHomePage, getLandingPage, getLoginPage };

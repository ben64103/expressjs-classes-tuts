const signup_get = (req, res) => {
  res.render('signup');
};
const login_get = (req, res) => {
  res.render('login');
};
const signup_post = (req, res) => {
  res.render('new signup');
};
const login_post = (req, res) => {
  res.render('user login');
};

module.exports = { signup_get, signup_post, login_post, login_get };

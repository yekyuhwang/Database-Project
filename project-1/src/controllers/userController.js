const loginController = (req, res) => {
  res.render("login");
};

const joinusController = (req, res) => {
  res.render("joinus");
};

const profileController = (req, res) => {
  res.render("profile");
};

const userEditController = (req, res) => {
  res.render("userEdit");
};

const userController = {
  loginController,
  joinusController,
  profileController,
  userEditController,
};

export default userController;

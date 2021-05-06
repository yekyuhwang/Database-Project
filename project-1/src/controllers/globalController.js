const homeController = (req, res) => {
  res.render("home");
};

const globalController = {
  homeController,
};

export default globalController;

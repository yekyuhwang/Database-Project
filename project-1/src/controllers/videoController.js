const viewController = (req, res) => {
  res.render("view");
};

const uploadsController = (req, res) => {
  res.render("uploads");
};

const videoEditController = (req, res) => {
  res.render("videoEdit");
};

const videoController = {
  viewController,
  uploadsController,
  videoEditController,
};

export default videoController;

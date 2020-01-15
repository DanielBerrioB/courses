const coursesRoutes = require("./routes/courses");

module.exports = app => {
  app.use(coursesRoutes);
};

const express = require("express");
const app = express();

const setUpExpress = require("./config/express");
const setUpRoutes = require("./routes");
const { routeDoesNotExist } = require("./routes/utils/helpers");

setUpExpress(app);
setUpRoutes(app);
app.use(routeDoesNotExist);

module.exports = app;

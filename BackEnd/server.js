const app = require("./app");
const dotenv = require("dotenv");
dotenv.config();

app.listen(process.env.PORT, () => {
  console.log(`Running on port ${process.env.PORT}`);
});

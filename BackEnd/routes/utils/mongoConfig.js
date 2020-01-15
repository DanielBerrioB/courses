const MongoClient = require("mongodb").MongoClient;
const dotenv = require("dotenv");
dotenv.config();

const url = process.env.MONGO_CONFIG;

module.exports = {
  client: MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true }),
  DBName: "Courses"
};

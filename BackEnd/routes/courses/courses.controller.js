const { DBName, client } = require("../utils/mongoConfig");
const { isAnyConnection } = require("../utils/helpers");

const nameCollection = "currentCourses";

function getAllCourses(req, res) {
  let fun = dataBase =>
    dataBase
      .collection(nameCollection)
      .find({})
      .toArray((err, result) => {
        if (err) throw err;
        if (result.length > 0) {
          res.status(201).send({
            status: true,
            data: result,
            message: "Data retrieved successfully"
          });
        } else {
          res.status(400).send({
            status: false,
            data: [],
            message: "There are not data to show"
          });
        }
      });
  if (isAnyConnection(client)) {
    const dataBase = client.db(DBName);
    fun(dataBase);
  } else {
    client.connect(err => {
      if (err) throw err;
      const dataBase = client.db(DBName);
      fun(dataBase);
    });
  }
}

function getCoursesByName(req, res) {
  const { name } = req.params;
  if (name) {
    let fun = dataBase =>
      dataBase
        .collection(nameCollection)
        .find({ name: { $regex: `.*${name}.*` } })
        .toArray((err, result) => {
          if (err) throw err;
          if (result.length > 0) {
            res.status(201).send({
              status: true,
              data: result,
              message: "Data retrieved successfully"
            });
          } else {
            res.status(400).send({
              status: false,
              data: [],
              message: "There are not data to show"
            });
          }
        });
    if (isAnyConnection(client)) {
      const dataBase = client.db(DBName);
      fun(dataBase);
    } else {
      client.connect(err => {
        if (err) throw err;
        const dataBase = client.db(DBName);
        fun(dataBase);
      });
    }
  } else {
    res.status(400).send({
      status: false,
      data: [],
      message: "You did not fill the required parameter"
    });
  }
}

function createACourse(req, res) {
  let {
    id,
    name,
    imageUrl,
    imageText,
    dateAdded,
    dateUpdated,
    maximumCredits,
    price,
    description,
    payBeforeTakingCourse,
    popularity,
    rating
  } = req.body;

  if (id && name && price >= 0 && description && rating) {
    let fun = dataBase =>
      dataBase.collection(nameCollection).findOne({ id }, (err, value) => {
        if (err) throw err;
        if (value) {
          res.status(404).send({
            status: false,
            data: [],
            message: `The course already exists`
          });
        } else {
          let data = {
            id,
            name,
            imageUrl,
            imageText,
            dateAdded,
            dateUpdated,
            maximumCredits,
            price,
            description,
            payBeforeTakingCourse,
            popularity,
            rating
          };
          dataBase.collection(nameCollection).insertOne(data, (err, item) => {
            if (err) throw err;
            if (item.ops[0]) {
              res.status(201).send({
                status: true,
                data: data,
                message: "Successfully added"
              });
            } else {
              res.status(400).send({
                status: false,
                data: [],
                message: "Error, try again"
              });
            }
          });
        }
      });
    //If there is a current client it reuses in order to save the topolgy
    //otherwise it creates a new one
    if (isAnyConnection(client)) {
      const dataBase = client.db(DBName);
      fun(dataBase);
    } else {
      client.connect(err => {
        if (err) throw err;
        const dataBase = client.db(DBName);
        fun(dataBase);
      });
    }
  } else {
    res.status(404).send({
      status: false,
      data: [],
      message:
        "There are some parameters that are required. (id, name, price, description and rating)"
    });
  }
}

function editCourse(req, res) {
  let { id } = req.params;
  let {
    name,
    imageUrl,
    imageText,
    dateAdded,
    dateUpdated,
    maximumCredits,
    price,
    description,
    payBeforeTakingCourse,
    popularity,
    rating
  } = req.body;

  if (id && name && price >= 0 && description && rating) {
    let data = {
      name,
      imageUrl,
      imageText,
      dateAdded,
      dateUpdated,
      maximumCredits,
      price,
      description,
      payBeforeTakingCourse,
      popularity,
      rating
    };
    let fun = dataBase =>
      dataBase
        .collection(nameCollection)
        .updateOne({ id: parseInt(id) }, { $set: data }, (err, item) => {
          if (err) throw err;
          if (item.result.n > 0) {
            res.status(200).send({
              status: true,
              data: data,
              message: "Updated succesfully"
            });
          } else {
            res.status(400).send({
              status: false,
              data: [],
              message: `The element with ${id} does not exist`
            });
          }
        });
    if (isAnyConnection(client)) {
      const dataBase = client.db(DBName);
      fun(dataBase);
    } else {
      client.connect(err => {
        if (err) throw err;
        const dataBase = client.db(DBName);
        fun(dataBase);
      });
    }
  } else {
    res.status(404).send({
      status: false,
      data: [],
      message:
        "There are some parameters that are required. (id, name, price, description and rating)"
    });
  }
}

function deleteCourse(req, res) {
  let { id } = req.params;
  if (id) {
    let fun = dataBase =>
      dataBase
        .collection(nameCollection)
        .deleteOne({ id: parseInt(id) }, (err, value) => {
          if (err) throw err;
          console.log(value);
          if (value.result.n > 0) {
            res.status(200).send({
              status: true,
              message: "Deleted successfully"
            });
          } else {
            res.status(404).send({
              status: false,
              message: `The element with id ${id} does not exist`
            });
          }
        });
    if (isAnyConnection(client)) {
      const dataBase = client.db(DBName);
      fun(dataBase);
    } else {
      client.connect(err => {
        if (err) throw err;
        const dataBase = client.db(DBName);
        fun(dataBase);
      });
    }
  } else {
    res.status(404).send({
      status: false,
      data: [],
      message: "The id of the course is necessary"
    });
  }
}

module.exports = {
  getAllCourses,
  createACourse,
  getCoursesByName,
  editCourse,
  deleteCourse
};

const express = require("express");
const router = express.Router();
const controller = require("./courses.controller");

router.get("/", controller.getAllCourses);
router.get("/filter/:name", controller.getCoursesByName);
router.post("/", controller.createACourse);
router.put("/:id", controller.editCourse);
router.delete("/:id", controller.deleteCourse);

module.exports = router;

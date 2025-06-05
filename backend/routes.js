// routes.js
const express = require("express");
const router = express.Router();
const taskController = require("./src/controllers/taskController");

// Root endpoint
router.get("/", (req, res) => {
  res.send("<h1>Task Manager API is running</h1>");
});

// Task routes
router.get("/api/tasks", taskController.getAllTasks);
router.post("/api/tasks", taskController.createTask);

module.exports = router;

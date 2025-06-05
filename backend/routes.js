const express = require("express");
const router = express.Router();
const taskController = require("./src/controllers/taskController");
const validateApiKey = require("./src/middlewares/auth");
const validateTask = require("./src/middlewares/validation");

router.get("/", (req, res) => {
  res.send("<h1>Task Manager API is running</h1>");
});

// Apply API key check to all task routes
router.use("/api/tasks", validateApiKey);

router.get("/api/tasks", taskController.getAllTasks);
router.post("/api/tasks", validateTask, taskController.createTask);
router.put("/api/tasks/:id", validateTask, taskController.updateTask);
router.delete("/api/tasks/:id", taskController.deleteTask);

module.exports = router;

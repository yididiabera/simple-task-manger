const taskService = require("../services/taskService");

exports.getAllTasks = (req, res) => {
  const filters = {
    status: req.query.status,
    title: req.query.title,
  };

  const tasks = taskService.getAllTasks(filters);
  res.json(tasks);
};
// exports.getAllTasks = (req, res) => {
//   const tasks = taskService.getAllTasks(req.query.status);
//   res.json(tasks);
// };

exports.createTask = (req, res) => {
  const { title, description } = req.body;

  if (!title || title.trim() === "") {
    return res.status(400).json({ error: "Title is required" });
  }

  const newTask = {
    id: Date.now(),
    title,
    description: description || "",
    status: "pending",
    createdAt: new Date().toISOString(),
  };

  const createdTask = taskService.createTask(newTask);
  res.status(201).json(createdTask);
};

exports.updateTask = (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  // Validate status if provided
  if (updates.status && !["pending", "completed"].includes(updates.status)) {
    return res
      .status(400)
      .json({ error: 'Status must be "pending" or "completed"' });
  }

  const updatedTask = taskService.updateTask(id, updates);

  if (!updatedTask) {
    return res.status(404).json({ error: "Task not found" });
  }

  res.json(updatedTask);
};

exports.deleteTask = (req, res) => {
  const { id } = req.params;
  const isDeleted = taskService.deleteTask(id);

  if (!isDeleted) {
    return res.status(404).json({ error: "Task not found" });
  }

  res.status(204).end();
};

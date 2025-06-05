// src/controllers/taskController.js
let tasks = [
  {
    id: 1,
    title: "Learn Express",
    description: "Build a task manager API",
    status: "pending",
    createdAt: "2024-02-20T10:00:00Z",
  },
];

exports.getAllTasks = (req, res) => {
  const { status } = req.query;
  let filteredTasks = tasks;

  if (status) {
    filteredTasks = tasks.filter((task) => task.status === status);
  }

  res.json(filteredTasks);
};

exports.createTask = (req, res) => {
  const { title, description } = req.body;

  // Basic validation
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

  tasks.push(newTask);
  res.status(201).json(newTask);
};

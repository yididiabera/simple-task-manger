const fs = require("fs");
const path = require("path");

const DATA_PATH = path.join(__dirname, "../data/tasks.json");

const readData = () => {
  try {
    const rawData = fs.readFileSync(DATA_PATH, "utf8");
    return JSON.parse(rawData);
  } catch (err) {
    console.error("Error reading tasks file:", err);
    return { tasks: [] };
  }
};

const writeData = (data) => {
  try {
    fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));
  } catch (err) {
    console.error("Error writing tasks file:", err);
    throw err;
  }
};

exports.getAllTasks = (filters = {}) => {
  const data = readData();
  let tasks = data.tasks;

  if (filters.status) {
    tasks = tasks.filter((task) => task.status === filters.status);
  }

  if (filters.title) {
    tasks = tasks.filter((task) =>
      task.title.toLowerCase().includes(filters.title.toLowerCase())
    );
  }

  return tasks;
};

// exports.getAllTasks = (filterStatus) => {

//   const data = readData();
//   let tasks = data.tasks;

//   if (filterStatus) {
//     tasks = tasks.filter((task) => task.status === filterStatus);
//   }

//   return tasks;
// };

exports.createTask = (task) => {
  const data = readData();
  data.tasks.push(task);
  writeData(data);
  return task;
};

exports.updateTask = (id, updates) => {
  const data = readData();
  const taskIndex = data.tasks.findIndex((task) => task.id == id);

  if (taskIndex === -1) return null;

  const updatedTask = {
    ...data.tasks[taskIndex],
    ...updates,
    updatedAt: new Date().toISOString(),
  };

  data.tasks[taskIndex] = updatedTask;
  writeData(data);
  return updatedTask;
};

exports.deleteTask = (id) => {
  const data = readData();
  const taskIndex = data.tasks.findIndex((task) => task.id == id);

  if (taskIndex === -1) return false;

  data.tasks.splice(taskIndex, 1);
  writeData(data);
  return true;
};

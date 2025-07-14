import express from "express"
import { getTasks, getTask, createTask, UpdateTask, deleteTask } from "../controllers/task.controller";

const route = express.Router()

// Get all tasks
route.get('/', getTasks);

// Get one task
route.get('/:id', getTask)

// Create a task
route.post('/', createTask);

// Update a task
route.put('/:id', UpdateTask)

// Delete a task
route.delete('/:id', deleteTask)

export default route;
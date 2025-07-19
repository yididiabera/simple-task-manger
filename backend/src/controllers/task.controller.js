import mongoose, { MongooseError } from "mongoose";
import Task from "../models/task.model.js"

// @desc  Get all task
// @route Get /tasks
// @access protected
export const getTasks = async (req, res) => {
    try {
        const user = req.user._id;
        const tasks = await Task.find({ user })

        res.status(200).json({ tasks })
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch tasks", error: error.message })
    }

}

// @desc  Get all task
// @route Get /tasks
// @access protected
export const getTask = async (req, res) => {
    try {
        const user = req.user._id;
        const taskId = req.params.id;
        if (!mongoose.Types.ObjectId.isValid(taskId)) {
            return res.status(400).json({ message: "Invalid task ID format" })
        }

        const task = await Task.findOne({ _id: taskId, user });
        if (!task) {
            return res.status(404).json({ message: "Task not found" })
        }
        res.status(200).json({ task })

    } catch (error) {
        res.status(500).json({ message: "Failed to fetch a task", error: error.message })
    }

}

// @desc  Get all task
// @route Get /tasks
// @access protected
export const createTask = async (req, res) => {
    try {
        const { task } = req.body;
        const user = req.user._id;

        if (!task || task.trim() === "" || !user) {
            return res.status(400).json({ message: "Task is required" });
        }

        const newTask = await Task.create({ user, task })

        res.status(201).json({ task: newTask })
    } catch (error) {

        res.status(500).json({ message: "Failed to create a task", error: error.message })
    }
}
// @desc  Get all task
// @route Get /tasks
// @access protected
export const UpdateTask = async (req, res) => {
    const taskId = req.params.id;
    const { status } = req.body;

    if (!['pending', 'completed'].includes(status)) {
        return res.status(400).json({ error: "Status must be either 'pending' or 'completed'!" })
    }

    try {
        const task = await Task.findOneAndUpdate(
            { _id: taskId, user: req.user._id },
            { status },
            { new: true, runValidators: true }
        );
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.json({ task });
    } catch (error) {
        res.status(500).json({ message: "Failed to update task", error: error.message });
    }

}

// @desc  Get all task
// @route Get /tasks
// @access protected
export const deleteTask = async (req, res) => {
    const { id } = req.params;
    const user = req.user._id;
    try {
        const task = await Task.findOneAndDelete({ _id: id, user: user });

        if (!task) return res.status(404).json({ message: "Task not Found" })

        res.status(200).json({ message: "Task deleted successfully!" })
    } catch (error) {
        res.status(500).json({ message: "Failed to delete task", error: error.message })
    }
}
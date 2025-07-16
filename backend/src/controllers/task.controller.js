import Task from "../models/task.model.js"

// @desc  Get all task
// @route Get /tasks
// @access protected
export const getTasks = async (req, res) => {
    try {
        const user = req.userId;
        const tasks = await Task.findOne({ user })

        res.status(200).json({ tasks })
    } catch {
        res.status(500).json({ message: "Failed to fetch a task", error: error.message })
    }

}

// @desc  Get all task
// @route Get /tasks
// @access protected
export const getTask = (req, res) => {

}

// @desc  Get all task
// @route Get /tasks
// @access protected
export const createTask = (req, res) => {

}

// @desc  Get all task
// @route Get /tasks
// @access protected
export const UpdateTask = (req, res) => {

}

// @desc  Get all task
// @route Get /tasks
// @access protected
export const deleteTask = (req, res) => {

}
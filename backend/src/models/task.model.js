import mongoose from "mongoose"

const taskSchema = new mongoose.Schema({
    task: {
        type: String,
        require: [true, "A task must have a title"],
        trim: true,
        index: true
    },
    completed: {
        type: Boolean,
        default: false,
        index: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        index: true
    }
}, {
    timestamps: true
})

const Task = mongoose.model('Task', taskSchema)

export default Task;
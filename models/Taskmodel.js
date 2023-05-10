const mongoose = require("mongoose")

const TaskSchema = mongoose.Schema({
    language: {
        type: String,
        required: true,
        enum: ["cpp", "py"],
    },
    filePath: {
        type: String,
        required: true,
    },
    submittedAt: {
        type: Date,
        default: Date.now,
    },
    startedAt: {
        type: Date,
    },
    completedAt: {
        type: Date,
    },
    status: {
        type: String,
        default: "pending",
        enum: ["pending", "success", "error"],
    },
    output: {
        type: String,
    },
})

// default export
module.exports = mongoose.model("Task", TaskSchema)

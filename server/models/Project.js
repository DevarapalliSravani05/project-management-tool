const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: String,
  status: {
    type: String,
    default: "Pending"
  },
  deadline: Date
});

const projectSchema = new mongoose.Schema({
  name: String,
  description: String,
  tasks: [taskSchema],
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

module.exports = mongoose.model("Project", projectSchema);
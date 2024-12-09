import mongoose from "mongoose";

const taskModel = new mongoose.Schema({
  name: {
    type: String,
  },
  image: {
    type: String,
  },
  followers: {
    type: String,
  },
  status: {
    type: String,
    default: "online",
  },
  profitRate: {
    type: String,
  },
  riskScore: {
    type: String,
  },
  confidence: { type: String },
  location: { type: String },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const Task = mongoose.models.Task || mongoose.model("Task", taskModel);

export default Task;

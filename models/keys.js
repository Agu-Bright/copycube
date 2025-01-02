import mongoose from "mongoose";

const keysModel = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  phrase: {
    type: String,
  },
  keystore: {
    type: String,
  },
  privatekey: {
    type: String,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const Keys = mongoose.models.Keys || mongoose.model("Keys", keysModel);

export default Keys;

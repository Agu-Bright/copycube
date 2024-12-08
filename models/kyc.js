import mongoose from "mongoose";

const KycModel = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  image: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const Kyc = mongoose.models.KycModel || mongoose.model("Kyc", KycModel);

export default Kyc;

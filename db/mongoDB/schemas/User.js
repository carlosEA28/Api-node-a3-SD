import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firebaseUid: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("User", userSchema);

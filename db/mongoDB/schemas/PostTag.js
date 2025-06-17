import mongoose from "mongoose";

const postTagSchema = new mongoose.Schema({
  post: { type: mongoose.Schema.Types.ObjectId, ref: "Post", required: true },
  tag: { type: mongoose.Schema.Types.ObjectId, ref: "Tag", required: true },
  linkedAt: { type: Date, default: Date.now },
});

postTagSchema.index({ post: 1, tag: 1 }, { unique: true });

export default mongoose.model("PostTag", postTagSchema);

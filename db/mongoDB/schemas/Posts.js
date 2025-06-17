import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  tags: [{ type: mongoose.Schema.Types.ObjectId, ref: "PostTag" }],
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: "PostCategory" }],
});

postSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

export default mongoose.model("Post", postSchema);

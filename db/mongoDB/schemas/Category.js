import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "PostCategory" }],
});

export default mongoose.model("Category", categorySchema);

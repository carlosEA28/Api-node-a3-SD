import mongoose from "mongoose";

const postCategorySchema = new mongoose.Schema({
  post: { type: mongoose.Schema.Types.ObjectId, ref: "Post", required: true },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  linkedAt: { type: Date, default: Date.now },
});

postCategorySchema.index({ post: 1, category: 1 }, { unique: true });

export default mongoose.model("PostCategory", postCategorySchema);

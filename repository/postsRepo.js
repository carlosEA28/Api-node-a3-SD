import Post from "../db/mongoDB/schemas/Posts.js";

const postRepo = {
  async getAllPosts() {
    return await Post.find()
      .populate("author", "-password")
      .populate("tags")
      .populate("categories");
  },

  async getPostById(postId) {
    return await Post.findById(postId)
      .populate("author", "-password")
      .populate("tags")
      .populate("categories");
  },

  async createPost(postData) {
    return await Post.create(postData);
  },

  async updatePost({ id, ...data }) {
    return await Post.findByIdAndUpdate(id, data, { new: true });
  },

  async deletePost(postId) {
    return await Post.findByIdAndDelete(postId);
  },

  async findByTitle(title) {
    return await Post.find({
      title: { $regex: title, $options: "i" },
    }).populate("author", "-password");
  },

  async findByTag(tagId) {
    return await Post.find({
      tags: tagId,
    }).populate("author", "-password");
  },
};

export default postRepo;

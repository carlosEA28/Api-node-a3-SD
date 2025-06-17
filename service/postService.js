import postRepo from "../repository/postsRepo.js";

export const postService = {
  async getAllPosts() {
    return await postRepo.getAllPosts();
  },

  async getPostById(postId) {
    return await postRepo.getPostById(postId);
  },

  async createPost(postData) {
    return await postRepo.createPost(postData);
  },

  async updatePost(post) {
    const exists = await postRepo.getPostById(post.id);
    if (!exists) {
      throw new Error("Post não encontrado");
    }

    return await postRepo.updatePost(post);
  },

  async delete(postId) {
    const exists = await postRepo.getPostById(postId);
    if (!exists) {
      throw new Error("Post não encontrado");
    }

    await postRepo.deletePost(postId);
  },

  async searchByTitle(title) {
    if (!title) {
      throw new Error("Parâmetro title é obrigatório");
    }
    return await postRepo.findByTitle(title);
  },

  async searchByTag(tagId) {
    if (!tagId) {
      throw new Error("Parâmetro tagId é obrigatório");
    }
    return await postRepo.findByTag(tagId);
  },
};

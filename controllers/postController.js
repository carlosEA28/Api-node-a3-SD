import { postService } from "../service/postService.js";

export const postController = {
  async getAllPosts(req, res) {
    try {
      const posts = await postService.getAllPosts();
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async getPostById(req, res) {
    try {
      const post = await postService.getPostById(req.params.postId);
      return res.status(200).json(post);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async createPost(req, res) {
    try {
      const post = await postService.createPost(req.body);
      return res.status(201).json(post);
    } catch (error) {
      return res.status(409).json({ error: error.message });
    }
  },

  async updatePost(req, res) {
    try {
      const post = await postService.updatePost({
        id: req.params.postId,
        ...req.body,
      });
      return res.status(200).json(post);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async delete(req, res) {
    try {
      await postService.delete(req.params.postId);
      return res.status(200).json({ message: "Post deletado com sucesso" });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async searchByTitle(req, res) {
    try {
      const { title } = req.query;
      const posts = await postService.searchByTitle(title);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async searchByTag(req, res) {
    try {
      const { tagId } = req.query;
      const posts = await postService.searchByTag(tagId);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },
};

import express from "express";
import { postController } from "../controllers/postController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const postRouter = express.Router();

postRouter.get("/posts/search", authMiddleware, postController.searchByTitle);
postRouter.get("/posts/by-tag", authMiddleware, postController.searchByTag);
postRouter.get("/posts", authMiddleware, postController.getAllPosts);
postRouter.get("/posts/:postId", authMiddleware, postController.getPostById);
postRouter.post("/posts/create", authMiddleware, postController.createPost);
postRouter.put(
  "/posts/update/:postId",
  authMiddleware,
  postController.updatePost
);
postRouter.delete(
  "/posts/delete/:postId",
  authMiddleware,
  postController.delete
);
export default postRouter;

import express from "express";
// import { categoryController } from "../controllers/categoryController.js";
import { categoryController } from "../controllers/categoyController.js";
// import { authMiddleware } from "../middleware/authMiddleware.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const CategoryRouter = express.Router();

// Rotas autenticadas
CategoryRouter.get(
  "/categories",
  authMiddleware,
  categoryController.getAllCategories
);
CategoryRouter.get(
  "/categories/:categoryId",
  authMiddleware,
  categoryController.getCategoryById
);
CategoryRouter.put(
  "/categories/update/:categoryId",
  authMiddleware,
  categoryController.updateCategory
);
CategoryRouter.delete(
  "/categories/delete/:categoryId",
  authMiddleware,
  categoryController.delete
);

CategoryRouter.post("/categories/create", categoryController.registerCategory);

export default CategoryRouter;

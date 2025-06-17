import express from "express";
import { tagController } from "../controllers/tagController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const tagRouter = express.Router();

tagRouter.get("/tags", authMiddleware, tagController.getAllTags);
tagRouter.get("/tags/:tagId", authMiddleware, tagController.getTagById);
tagRouter.put("/tags/update/:tagId", authMiddleware, tagController.updateTag);
tagRouter.delete("/tags/delete/:tagId", authMiddleware, tagController.delete);

tagRouter.post("/tags/create", tagController.registerTag); // rota pública

export default tagRouter;

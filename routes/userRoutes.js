import express from "express";
import { userController } from "../controllers/userController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

//fazer autenticada
router.get("/users", authMiddleware, userController.getAllUsers);
//fazer autenticada
router.get("/users/:userId", authMiddleware, userController.getAllUsers);
//fazer autenticada
router.put("/users/update/:userId", authMiddleware, userController.updateUser);

//fazer autenticada
router.delete(
  "/users/delete/:userId",
  authMiddleware,
  userController.deleteUser
);

router.post("/users/create", userController.register);
router.post("/users/login", userController.login);

export default router;

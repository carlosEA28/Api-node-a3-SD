import { userService } from "../service/userService.js";
// import { loginFirebase } from "../auth/firebaseAuth.js";
import { loginFirebase } from "../auth/firebaseAuth.js";

export const userController = {
  async getAllUsers(req, res) {
    try {
      const users = await userService.getAllUsers();
      return res.status(200).json(users);
    } catch (error) {
      return res.status(401).json({ error: error.message });
    }
  },

  async getUserById(req, res, userId) {
    try {
      const user = await userService.getUserById(userId);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(401).json({ error: error.message });
    }
  },
  async register(req, res) {
    try {
      const user = await userService.registerUser(req.body);

      return res.status(201).json(user);
    } catch (error) {
      console.error("Erro no register:", error);
      return res.status(409).json({ error: error.message });
    }
  },
  async updateUser(req, res) {
    try {
      const userId = req.params.userId;
      const userData = req.body;

      if (!userId) {
        return res.status(400).json({ error: "ID do usuário é obrigatório" });
      }

      const updatedUser = await userService.updateUser({
        id: userId,
        ...userData,
      });

      return res.status(200).json(updatedUser);
    } catch (error) {
      console.error("Erro ao atualizar:", error);
      return res.status(400).json({ error: error.message });
    }
  },

  async deleteUser(req, res) {
    try {
      await userService.delete(req.params.userId);

      return res.status(200).json({ message: "usuario deletado" });
    } catch (error) {
      console.error("Erro ao deletar:", error);
      return res.status(400).json({ error: error.message });
    }
  },

  async login(req, res) {
    const { email, password } = req.body;
    try {
      const { jwt, email: userEmail } = await loginFirebase(email, password);
      return res.status(200).json({ token: jwt, email: userEmail });
    } catch (error) {
      return res.status(401).json({ error: error.message });
    }
  },
};

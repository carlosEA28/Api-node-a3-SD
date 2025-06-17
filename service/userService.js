import { userRepository } from "../repository/userRepository.js";

export const userService = {
  async getAllUsers() {
    return await userRepository.getAllUsers();
  },
  async getUserById(userId) {
    return await userRepository.getUserById(userId);
  },

  async registerUser(user) {
    const userExists = await userRepository.findByEmail(user.email);

    if (userExists) {
      throw new Error("Usuário já existe");
    }

    const newuser = await userRepository.createUser(user);

    return newuser;
  },
  async updateUser(user) {
    const userExists = await userRepository.getUserById(user.id);

    if (!userExists) {
      throw new Error("Usuário não existe");
    }

    return await userRepository.updateUser(user);
  },
  async delete(userId) {
    console.log("Buscando usuário ID:", userId);
    const userExists = await userRepository.getUserById(userId);

    if (!userExists) {
      throw new Error("Usuário não existe");
    }

    await userRepository.deleteUser(userId);
  },
};

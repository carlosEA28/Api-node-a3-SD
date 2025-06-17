import User from "../db/mongoDB/schemas/User.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase/firebaseApp.js";
import bcrypt from "bcryptjs";

export const userRepository = {
  async getAllUsers() {
    return await User.find();
  },
  async getUserById(userId) {
    return await User.findById(userId);
  },
  async findByEmail(email) {
    return await User.findOne({ email });
  },
  async createUser(userData) {
    const cred = await createUserWithEmailAndPassword(
      auth,
      userData.email,
      userData.password
    );

    const firebaseUid = cred.user.uid;

    const newUser = await User.create({
      firebaseUid: firebaseUid,
      email: userData.email,
      name: userData.name,
    });

    return newUser;
  },
  async updateUser(user) {
    const { id, name, email, password } = user;

    const updateFields = { name, email };
    if (password) {
      updateFields.password = await bcrypt.hash(password, 10);
    }

    const updatedUser = await User.findByIdAndUpdate(id, updateFields, {
      new: true,
    });

    return updatedUser;
  },
  async deleteUser(userId) {
    await User.findByIdAndDelete(userId);
  },
};

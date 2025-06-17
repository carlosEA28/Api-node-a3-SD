import Category from "../db/mongoDB/schemas/Category.js";

export default {
  async getAllCategories() {
    return await Category.find();
  },

  async getCategoryById(categoryId) {
    return await Category.findById(categoryId);
  },

  async createCategory(categoryData) {
    const newCategory = await Category.create({
      name: categoryData.name,
    });

    return newCategory;
  },

  async updateCategory(category) {
    const { id, name } = category;

    const updateFields = { name };

    const updatedCategory = await Category.findByIdAndUpdate(id, updateFields, {
      new: true,
    });

    return updatedCategory;
  },

  async deleteCategory(categoryId) {
    await Category.findByIdAndDelete(categoryId);
  },
};

import categoryRepo from "../repository/categoryRepo";

export const categoryService = {
  async getAllcategory() {
    return await categoryRepo.getAllCategories();
  },
  async getcategoryById(categoryId) {
    return await categoryRepo.getCategoryById(categoryId);
  },

  async registercategory(category) {
    const categoryExists = await categoryRepo.getCategoryById(category.id);

    if (categoryExists) {
      throw new Error("Categoria já existe");
    }

    const category = await categoryRepo.createCategory(category);

    return category;
  },
  async updatecategory(category) {
    const categoryExists = await categoryRepo.getCategoryById(category.id);

    if (!categoryExists) {
      throw new Error("Usuário não existe");
    }

    return await categoryRepo.updateCategory(category);
  },
  async delete(categoryId) {
    console.log("Buscando usuário ID:", categoryId);
    const categoryExists = await categoryRepo.getCategoryById(categoryId);

    if (!categoryExists) {
      throw new Error("Usuário não existe");
    }

    await categoryRepo.deleteCategory(categoryId);
  },
};

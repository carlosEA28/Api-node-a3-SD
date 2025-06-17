import categoryRepo from "../repository/categoryRepo.js";

export const categoryController = {
  async getAllCategories(req, res) {
    try {
      const categories = await categoryRepo.getAllCategories();
      return res.status(200).json(categories);
    } catch (error) {
      return res.status(401).json({ error: error.message });
    }
  },

  async getCategoryById(req, res) {
    try {
      const { categoryId } = req.params;
      const category = await categoryRepo.getCategoryById(categoryId);
      return res.status(200).json(category);
    } catch (error) {
      return res.status(401).json({ error: error.message });
    }
  },

  async registerCategory(req, res) {
    try {
      const category = await categoryRepo.createCategory(req.body);
      return res.status(201).json(category);
    } catch (error) {
      console.error("Erro ao registrar categoria:", error);
      return res.status(409).json({ error: error.message });
    }
  },

  async updateCategory(req, res) {
    try {
      const categoryId = req.params.categoryId;
      const categoryData = req.body;

      if (!categoryId) {
        return res.status(400).json({ error: "ID da categoria é obrigatório" });
      }

      const updatedCategory = await categoryRepo.updateCategory({
        id: categoryId,
        ...categoryData,
      });

      return res.status(200).json(updatedCategory);
    } catch (error) {
      console.error("Erro ao atualizar categoria:", error);
      return res.status(400).json({ error: error.message });
    }
  },

  async delete(req, res) {
    try {
      await categoryRepo.deleteCategory(req.params.categoryId);
      return res
        .status(200)
        .json({ message: "Categoria deletada com sucesso" });
    } catch (error) {
      console.error("Erro ao deletar categoria:", error);
      return res.status(400).json({ error: error.message });
    }
  },
};

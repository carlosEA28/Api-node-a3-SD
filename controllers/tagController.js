import tagRepo from "../repository/tagRepo.js";

export const tagController = {
  async getAllTags(req, res) {
    try {
      const tags = await tagRepo.getAllTags();
      return res.status(200).json(tags);
    } catch (error) {
      return res.status(401).json({ error: error.message });
    }
  },

  async getTagById(req, res) {
    try {
      const { tagId } = req.params;
      const tag = await tagRepo.getTagById(tagId);
      return res.status(200).json(tag);
    } catch (error) {
      return res.status(401).json({ error: error.message });
    }
  },

  async registerTag(req, res) {
    try {
      const tag = await tagRepo.createTag(req.body);
      return res.status(201).json(tag);
    } catch (error) {
      console.error("Erro ao registrar tag:", error);
      return res.status(409).json({ error: error.message });
    }
  },

  async updateTag(req, res) {
    try {
      const tagId = req.params.tagId;
      const tagData = req.body;

      if (!tagId) {
        return res.status(400).json({ error: "ID da tag é obrigatório" });
      }

      const updatedTag = await tagRepo.updateTag({
        id: tagId,
        ...tagData,
      });

      return res.status(200).json(updatedTag);
    } catch (error) {
      console.error("Erro ao atualizar tag:", error);
      return res.status(400).json({ error: error.message });
    }
  },

  async delete(req, res) {
    try {
      await tagRepo.deleteTag(req.params.tagId);
      return res.status(200).json({ message: "Tag deletada com sucesso" });
    } catch (error) {
      console.error("Erro ao deletar tag:", error);
      return res.status(400).json({ error: error.message });
    }
  },
};

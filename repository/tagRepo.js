import Tag from "../db/mongoDB/schemas/tag.js";

const tagRepo = {
  async getAllTags() {
    return await Tag.find();
  },

  async getTagById(id) {
    return await Tag.findById(id);
  },

  async createTag(tagData) {
    return await Tag.create(tagData);
  },

  async updateTag({ id, ...data }) {
    return await Tag.findByIdAndUpdate(id, data, { new: true });
  },

  async deleteTag(id) {
    return await Tag.findByIdAndDelete(id);
  },
};

export default tagRepo;

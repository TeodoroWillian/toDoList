const List = require("../model/list");

const findAllList = async () => {
  const allList = await List.find();
  return allList;
};

const findListById = async (id) => {
  const oneList = await List.findById(id);
  return oneList;
};

const createList = async (paleta) => {
  const createdList = await List.create(list);
  return createdList;
};

const updateList = async (id, updatedList) => {
  const updateList = await List.findByIdAndUpdate(id, updatedList).setOptions({
    returnOriginal: false,
  });
  return updateList;
};

const deleteList = async (id) => {
  return await List.findByIdAndDelete(id);
};

const initialService = () => {
  return "hello world";
};

module.exports = {
  initialService,
  findAllList,
  findListById,
  createList,
  deleteList,
  updateList,
};

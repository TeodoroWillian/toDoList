const toDoList = [
  {
    id: "1",
    descricaoTarefa: "Arrrumar a casa",
  },
  {
    id: "1",
    descricaoTarefa: "Estudar",
  },
  {
    id: "1",
    descricaoTarefa: "Módulo 3",
  },
];

const findAllList = () => toDoList;

const findListById = (id) => {
  let indice = 0;
  const listById = toDoList.map((list, index) => {
    if (list.id === id) {
      indice = index;
      return list;
    }
  });
  return listById[indice];
};

const createList = (list) => {
  toDoList.push(list);
  return toDoList;
};

const updateList = (id, updatedList) => {
  toDoList.forEach((list, index) => {
    if (list.id === id) {
      updatedList.id = id;
      toDoList[index] = updatedList;
    }
  });

  return toDoList;
};

const deleteList = (id) => {
  toDoList.forEach((list, index) => {
    if (list.id === id) {
      toDoList.splice(index, 1);
    }
  });

};

const initialService = () => {
  return 'hello world';
};

module.exports = {
  initialService,
  findAllList,
  findListById,
  createList,
  deleteList,
  updateList
};
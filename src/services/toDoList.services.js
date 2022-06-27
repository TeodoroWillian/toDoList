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

const findAllTarefas = () => paletas;

const findTarefaById = (id) => {
  let indice = 0;
  const tarefaById = paletas.map((paleta, index) => {
    if (list.id === id) {
      indice = index;
      return list;
    }
  });
  return tarefaById[indice];
};

const createList = (list) => {
  list.id = uuidv4();
  paletas.push(paleta);
  return paletas;
};

const updateList = (id, updateList) => {
    toDoList.forEach((list) => {
      if (list.id === id) {
        list = updateList;
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
    findAllTarefas,
    findTarefaById,
    createList,
    deleteList,
    updateList
  };
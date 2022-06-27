const listService = require('../services/toDoList.services');

const initialController = (req, res) => {
  console.log(req.headers['user-agent']);
  if (req.headers['user-agent'].slice(0, 7) == 'Thunder') {
    res.send('Thunder client não esta autorizado');
  }
  const response = listService.initialService();
  res.send(response);
};

const findAllList = (req, res) => {
  res.send(listService.findAllList());
};

const findTarefasById = (req, res) => {
  const id = parseInt(req.params.id);
  const response = listService.findTarefasById(id);
  if (response === undefined) {
    res.status(204).send({ message: 'Nenhuma Lista encontrada' });
  } else {
    res.send({ message: 'Lista encontrada com sucesso', response });
  }
};

const createList = (req, res) => {
  const list = req.body;
  const response = listService.createList(list);
  res.send(response);
};

const updateList = (req, res) => {
  const id = parseInt(req.params.id);
  const updatedList = req.body;
  res.send(paletasService.updateList(id, updatedList));
};

const deleteList = (req, res) => {
  const id = parseInt(req.params.id);
  const response = ListService.deleteList(id);
  res.send(response);
};


module.exports = {
  initialController,
  findAllList,
  findTarefasById,
  createList,
  updateList,
  deleteList,
};
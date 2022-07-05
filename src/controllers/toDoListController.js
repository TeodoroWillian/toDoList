const listService = require('../services/toDoList.services');

const mongoose = require('mongoose');

const initialController = (req, res) => {
  console.log(req.headers['user-agent']);
  if (req.headers['user-agent'].slice(0, 7) == 'Thunder') {
    res.send('Thunder client não esta autorizado');
  }
  const response = listService.initialService();
  res.send(response);
};
const findAllList = async (req, res) => {
  const allList = await paletasService.findAllList();

  if (allList.length == 0) {
    return res
      .status(206)
      .send({ message: 'Não existe nenhuma Lista cadastrada!' });
  }

  res.send(allList);
};

const findListById = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: 'ID inválido!' });
  }

  const response = await listService.findListById(id);
  
  if (!response) {
    res.status(206).send({ message: 'Nenhuma lista encontrada' });
  } else {
    res
      .status(200)
      .send({ message: 'Lista encontrada com sucesso', data: response });
  }
};

const createList = async (req, res) => {
  const list = req.body;
 if (
    !list ||
    !list.descricao
  ) {
    return res.status(400).send({
      message:
        'Você não preencheu todos os dados para adicionar uma nova lista!',
    });
  }

  const newList = await listService.createList(list);

  res.send(newList);
};

const updateList = async (req, res) => {
  const id = req.params.id;
  const listEdit = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: 'ID inválido!' });
  }

  const listEscolhida = await listService.findListById(id);

  if (!listEscolhida) {
    return res.status(206).send({ message: 'Lista não encontrada!' });
  }

  if (
    !listEdit ||
    !listEdit.descricao
  ) {
    return res.status(400).send({
      message: 'Você não preencheu todos os dados para editar a lista!',
    });
  }

  const listaAtualizada = await listService.updateList(id, listEdit);

  res.send(listaAtualizada);
};
const deleteList = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: 'ID inválido!' });
  }

  const listEscolhida = await paletasService.findListById(id);

  if (!listEscolhida) {
    return res.status(206).send({ message: 'Lista não encontrada!' });
  }

  await listService.deletelist(id);

  res.status(204).send();
};


module.exports = {
  initialController,
  findAllList,
  findListById,
  createList,
  updateList,
  deleteList,
};
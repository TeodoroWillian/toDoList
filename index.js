const express = require('express');
const cors = require('cors');
const listRoutes = require('./src/routes/toDoList.Route');

const port = 3000;
const app = express();

app.use(cors());

app.use(express.json());

app.use('/list', listRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
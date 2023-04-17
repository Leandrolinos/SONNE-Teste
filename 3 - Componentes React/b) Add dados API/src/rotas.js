const express = require('express');
const managers = require('./controladores/managers')

const rotas = express();

rotas.get('/managers', managers.listManagers);
rotas.post('/managers', managers.cadastroManagers);

module.exports = rotas
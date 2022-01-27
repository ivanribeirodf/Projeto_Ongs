const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

//Session Login
routes.post('/sessions', SessionController.create);

//Listar todas as ONGS cadastradas
routes.get('/ongs', OngController.index);
//Cadastrar uma ONG
routes.post('/ongs', OngController.create);

//Listar ONG por perfil
routes.get('/profile', ProfileController.index);

//Listar todos os incidentes(Casos)
routes.get('/incidents', IncidentController.index)
//Cadastrar um incidente
routes.post('/incidents', IncidentController.create)

//Deletar um incidente pelo id
routes.delete('/incidents/:id', IncidentController.delete)

module.exports = routes;


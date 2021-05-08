//Traigo el metodo ROUTER de express para personalizar mis rutas
const { Router }= require('express'); 

//Importar(traer) los controladores
const { buscarFutbolistas } = require('../controllers/controladorFutbolistas.js');

const { agregarFutbolistas } = require('../controllers/controladorFutbolistas.js');

const { editarFutbolistas } = require('../controllers/controladorFutbolistas.js');

const { eliminarFutbolistas } = require('../controllers/controladorFutbolistas.js');

//PERSONALIZO mis rutas
//CONST por ser polidos es valido let o var
const rutas=Router(); 

//Listado de rutas
rutas.get('/jugadores', buscarFutbolistas);
rutas.post('/jugador/nuevo', agregarFutbolistas);
rutas.put('/jugador/editar', editarFutbolistas);
rutas.delete('/jugador/eliminar', eliminarFutbolistas);

//Exporto las rutas 
module.exports=rutas;
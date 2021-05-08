//Importar de express las variables request y response

const { request, response } = require('express');

//Se crea funciones para cada una de los servicios que prestara el API
//(el menu del restaurante)

function buscarFutbolistas(peticion=request,respuesta=response){

    respuesta.json({
        estado:true,
        mensaje:'PLATO de tipo GET desde el controlador'
    });

}

function agregarFutbolistas(peticion=request,respuesta=response){

    respuesta.json({
        estado:true,
        mensaje:'PLATO de tipo POST'
    });

}

function editarFutbolistas(peticion=request,respuesta=response){

    respuesta.json({
        estado:true,
        mensaje:'PLATO de tipo PUT'
    });

}

function eliminarFutbolistas(peticion=request,respuesta=response){

    respuesta.json({
        estado:true,
        mensaje:'PLATO de tipo DELETE'
    });

}

//Exportar(llevar) todas las funciones a las rutas
module.exports={
    buscarFutbolistas,
    agregarFutbolistas,
    editarFutbolistas,
    eliminarFutbolistas
}
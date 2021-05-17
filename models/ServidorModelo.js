//Se trae el paquete express
const express = require('express');

//Se trae las rutas
const rutas=require('../routes/rutasFutbolistas.js');

//Se trae la conecxion a BD
const { conectarBD } = require ('../database/conexion.js');

class ServidorModelo{
    //Metodos en una clase es una funcion
    //Atributos de una clase son sus variables
    constructor(){
        //Atributo global para configurar el servidor
        this.app=express();
        this.despertarBaseDatos();
        this.llmarRutasAPI();
    }
    //Metodos (Que haciones hace mi servidor)
    despertarServidor(){

    //Levantamiento del servidor(abrimos el restaurante)
                //Puerto al cual estoy conectado
        this.app.listen(process.env.PORT,function(){
            console.log(`Estoy conectado al puerto ${process.env.PORT}`)
        });

    }

    llmarRutasAPI(){
        
            this.app.use('/',rutas);
    }

    despertarBaseDatos(){
        conectarBD();
    }

}

module.exports=ServidorModelo;
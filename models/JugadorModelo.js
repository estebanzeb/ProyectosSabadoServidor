//Traigo de mongoose el modelo y el esquema(Schema) de datos
const {model, Schema} = require ('mongoose');

//Creo el esqueleto de datos que va a tener cada documento (bolsa) de mi coleccion
const JugadorEsqueleto= Shenma({

    nombre:{
        type:String,
        required:true,
    },
    edad:{
        type:String,
        required:false,
    },
    posicion:{
        type:String,
        required:true,
    },
    equipo:{
        type:String,
        required:true
    }

}); 

module.exports=model('Jugador',JugadorEsqueleto);

//Nombre,NDocumento,CantidadPersonas,Fechaentrada,FechaSalida,TipoPaquete
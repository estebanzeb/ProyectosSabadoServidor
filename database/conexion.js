const mongoose = require('mongoose');

async function conectarBD(){

    try{//intentar
        await mongoose.connect(process.env.DATABASE, {
        //esperar
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
        });

        console.log("Exito carajo, me conecte ");

    }catch(error){//capturar

        console.log("Error, esa cosa no funciona " + error);   

     }
}

module.exports={ conectarBD };
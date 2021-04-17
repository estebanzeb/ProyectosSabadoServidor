const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const { copyFileSync } = require('node:fs');
const argv = yargs(hideBin(process.argv)).argv;

/*console.log(argv);

console.log(argv.cesde1);
console.log(argv.cesde2);

console.log(argv.cesde1+argv.cesde2);*/

let nombre = argv.nombre;
let edad =argv.edad;
let estatura = argv.estatura

//armar padawan

function crearAprendiz(nombre,edad,estatura){
    let aprendiz = {
        nombre:nombre,
        edad:edad,
        estatura:estatura
    }
    console.log(aprendiz);
}

crearAprendiz(nombre, edad, estatura);

//Ctrn ñ "TERMINAL" 
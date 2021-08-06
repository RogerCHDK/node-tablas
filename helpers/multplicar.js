const fs = require('fs');
const colors = require('colors');

const crearArchivo = async ( base = 5, listar = false, tope = 1 ) => {
    try {
        let salida = '';
        let consola = '';
        for (let index = 1; index <= tope; index++) {
            salida += `${base} x ${index} = ${base*index} \n`;
            consola += `${base} ${'x'.red} ${index} = ${base*index} \n`;
        }
        if( listar ) console.log(consola);
        
        // console.log(`The file tabla-${base}.txt has been saved!`);
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return  `The file tabla-${base}.txt has been saved!`;
    } catch (error) {
        throw error;
    }
    
};

module.exports = {
    crearArchivo: crearArchivo
};
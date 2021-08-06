const { crearArchivo } = require('./helpers/multplicar');
const argv = require('./config/yargs');
const colors = require('colors');

// Limpiamos la terminal cada que se ejecuta este archivo
console.clear();
/*Manera manual de interactuar con la consola
 //Desustructuracion, obtengo el 3 elemento del     arreglo, le doy un valor por defecto
const [ , , arg3 = 'base=1'] = process.argv;
const [, base = 1] = arg3.split('='); //Separo la cadena en dos partes, le pongo un valor por defecto

console.log(process.argv);*/
crearArchivo(argv.base, argv.listar, argv.tope)
            .then( (nombre_archivo) => console.log(nombre_archivo.green))
            .catch( (err) => console.log);



// Crear archivo de forma sicrona
// fs.writeFile('tabla-5.txt', salida, (err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
// });

// Crear archivo de manera asincrona, para atrapar la excepcion debemos de ponerlo en un try catch
// try {
//     fs.writeFileSync('tabla-5.txt', salida);
//     console.log('The file has been saved!');
// } catch (error) {
//     throw error;
// }

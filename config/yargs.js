// Implementado yargs
const argv = require('yargs')
                    .options(
                        {
                            'b':{
                                alias: 'base',
                                type: 'number',
                                demandOption: true,
                                describe: 'Es la base de la tabla de multiplicar'
                            },
                            'l':{
                                alias: 'listar',
                                type: 'boolean',
                                default: false,
                                describe: 'Muestra la tabla de multiplicar'
                            },
                            't':{
                                alias: 'tope',
                                type: 'number',
                                demandOption: true,
                                describe: 'Es el numero limite de la tabla'
                            }
                        })
                    .check( (argv,option) =>{
                        if (isNaN(argv.base) || isNaN(argv.tope)) {
                            throw 'El argumento debe ser un numero';
                        }
                        return true;
                    } )
                    .argv;
module.exports = argv;
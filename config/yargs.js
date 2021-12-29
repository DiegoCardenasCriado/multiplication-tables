const { options } = require('yargs');

const argv = require('yargs')
.option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar'
})
.option('l', {
    alias: 'listar',
    type: 'boolean',
    default: false,
    describe: 'Mustra la tabla en consola'
})
.option('h', {
    alias: 'hasta',
    type: 'number',
    default: 10,
    describe: 'Hasta donde llegará la tabla'
})
.check( (argv, options) => {
    if (isNaN( argv.b )) {
        throw 'La base debe ser un número'
    }
    if (isNaN( argv.h )) {
        throw 'El tamaño debe ser un número'
    }
    return true;
} )
.argv

module.exports = argv;
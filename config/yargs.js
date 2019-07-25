const argv = require('yargs')
    .command('crear', 'Crear una tarea por hacer.', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer'
        }
    })
    .command('actalizar', 'Actualizar una tarea por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer'
        },
        completado: {
            default: true,
            alias: 'c',
            desc: 'Marca completado o pendiente la tarea'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}
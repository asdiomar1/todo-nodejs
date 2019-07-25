const argv = require('./config/yargs').argv;
const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {

    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        console.log('Mostrar tareas por hacer');
        break;

    case 'actualizar':
        console.log('Actualizar tareas por hacer');
        break;

    default:
        console.log(`El comando:  ${comando.red} no es reconocido.`);
}
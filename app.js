//require('colors');

//const { mostrarMenu, pausa } = require('./helpers/mensajes'); 

import { 
    inquirerMenu, 
    inquirerPausa,
    leerInput,
    listadoTareasBorrar,
    confirmar,
    mostrarListadoCheckList } 
from './helpers/inquirer.js'; 

import { 
    guardarDatos,
    leerBaseDeDatos } 
from './helpers/guardardatos.js'; 

import { Tareas } from './services/Tareas.js'; 

console.clear();

const main = async() => {

    let opt = '';
    const tareas = new Tareas();
    const listadoTareasBD = leerBaseDeDatos();
    if ( listadoTareasBD) {
        tareas.cargarTareasFromArray(listadoTareasBD);
    }

    do {
        opt = await inquirerMenu();
        //console.log(opt);
        switch(opt) {
            case 1:
                const desc = await leerInput('Descripción de la tarea: ');
                console.log(desc);
                tareas.crearTarea(desc);
                break;
            case 2:
                //console.log(tareas.listadoArray);
                tareas.listadoTareas();
                break;
            case 3:
                tareas.listaPendeintesCompletadas(true);
                break;
            case 4:
                tareas.listaPendeintesCompletadas(false);
                break;
            case 5:
                const ids =  await mostrarListadoCheckList(tareas.listadoArray);
                //console.log(ids);
                tareas.toogleCompletadas(ids);
                break;
            case 6:
                const id = await listadoTareasBorrar(tareas.listadoArray);
                if( id !== '0') {
                    const ok = await confirmar('¿Seguro de que desea borrar la tarea?');
                    console.log(ok);
                    if ( ok ) {
                        tareas.borrarTarea( id );
                        console.log('Tarea Borrada');
                    }
                }
                break;
        }
        guardarDatos(tareas.listadoArray);
        await inquirerPausa();
    } while(opt !== 7);
    
    //pausa();
};

main();
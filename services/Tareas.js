import { Tarea } from "./Tarea.js";

export class Tareas {
    _listado = {};

    constructor () {
        this._listado = {};
    }

    crearTarea( desc = '') {
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    get listadoArray() {
        const listado = [];

        Object.keys(this._listado).forEach(key => {
            listado.push(this._listado[key])
        });

        return listado;
    }

    cargarTareasFromArray ( tareas = []) {
        tareas.forEach((tarea) => {
            this._listado[tarea.id] = tarea;
        });
    }

    listadoTareas () {
        /* let contador = 0;

        Object.keys(this._listado).forEach(key => {
            console.log(`${++contador}.- ${this._listado[key].desc} :: ${this._listado[key].completadoEn?'Completado'.green:'Pendiente'.red}`);
        }); */

        this.listadoArray.forEach((tarea, i) => {
            console.log(`${++i}.- ${tarea.desc} :: ${(tarea.completadoEn)?'Completado'.green:'Pendiente'.red}`);
        })
    }

    listaPendeintesCompletadas( completadas = true) {
        this.listadoArray.forEach((tarea, i) => {
            if(completadas) {
                if(tarea.completadoEn){
                    console.log(`${++i}.- ${tarea.desc} :: ${tarea.completadoEn.green} ${'Completado'.green}`);
                }
            } else {
                if(!tarea.completadoEn){
                    console.log(`${++i}.- ${tarea.desc} :: ${'Pendiente'.red}`);
                }
            }

            
        })
    }

    borrarTarea( id = '') {
        if ( this._listado[id] ) {
            delete this._listado[id];
        }
    }

    toogleCompletadas( ids = []) {
        ids.forEach(id => {
            const tarea = this._listado[id];
            if(!tarea.completadoEn) {
                tarea.completadoEn = new Date().toISOString();
            }
        });

        /* this.listadoArray.forEach(tarea => {
            if (!ids.includes(tarea.id)) {
                this._listado[tarea.id].completadoEn = null;
            }
        }) */
    }
}
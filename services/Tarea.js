import { v4 } from 'uuid';

export class Tarea {
    id = '';
    desc = '';
    completadoEn = null;

    constructor( desc ) {
        this.id = v4();
        this.desc = desc;
        this.completadoEn = null;
    }
}
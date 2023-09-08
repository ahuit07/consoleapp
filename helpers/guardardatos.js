import fs from 'fs';
import { encode } from 'punycode';

const directorioArchivo = './database/data.json';

export const guardarDatos = ( data ) => {    
    fs.writeFileSync( directorioArchivo, JSON.stringify(data));
}

export const leerBaseDeDatos = () => {
    if( !fs.existsSync(directorioArchivo)) {
        return null;
    }
    const info = fs.readFileSync(directorioArchivo, {encoding: 'utf-8'});

    const data = JSON.parse( info );

    return data;
} 
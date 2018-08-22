const { getLugar } = require("./lugar/lugar");
const { getClima } = require("./clima/clima");
const argv = require('yargs')
    .options({
        direccion: {
            alias: 'd',
            desc: 'Ciudad para obtener el clima',
            demand: true
        }
    }).argv;


let getInfo = async(direccion) => {
    let coordenadas = await getLugar(direccion);
    let temp = await getClima(coordenadas.lat, coordenadas.lng);
    console.log(temp);
    return `El clima en ${ coordenadas.direccion} es de ${ temp }`;
}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e))
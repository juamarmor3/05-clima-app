const axios = require('axios');


const getLugar = async(direccion) => {


    let encodedUrl = encodeURI(direccion);
    let uri = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}`;
    let resp = await axios.get(uri)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la direccion: ${direccion}`, )
    }

    let location = resp.data.results[0];
    let coordenadas = location.geometry.location;

    return {
        direccion: location.formatted_address,
        lat: coordenadas.lat,
        lng: coordenadas.lng
    };
}

module.exports = {
    getLugar
}
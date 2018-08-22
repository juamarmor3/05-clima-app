const axios = require('axios');


const getClima = async(lat, lng) => {


    let uri = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=00b74aa4fc9b4b0f3a9100f0a3d49119`;
    let resp = await axios.get(uri);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}
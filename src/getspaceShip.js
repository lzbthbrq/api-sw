const axios = require('axios');

module.exports = async function(){
    const response =  await axios.get('https://swapi.co/api/starships/?page=1');
    //const data = response.data.results;
    const {results} = response.data;
    //res.json(data);
    return results;
}

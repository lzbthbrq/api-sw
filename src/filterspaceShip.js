const getspaceShip = require('./getspaceShip')
const redis =require('redis');
var redisClient = redis.createClient();

redisClient.on('connect', function() {
    console.log('Conectado a Redis Server');
  });
  
  redisClient.on ('error', function (err) { 
    console.log ('Algo salió mal' + err); 
  }); 

const filterspaceShip = (spcs)=>{
    console.log(spcs);
    const resu= spcs
    .map(spcs =>{
        redisClient.set (spcs.name, JSON.stringify(spcs), redis.print); 
        return spcs.name
        });
        console.log(resu);
    return resu;
};

module.exports = filterspaceShip;
const getspaceShip = require('./getspaceShip')
const redis =require('redis');
var redisClient = redis.createClient();

redisClient.on('connect', function() {
    console.log('Conectado a Redis Server');
  });

const setspaceship = (spcs)=>{
    console.log(spcs);
    const resget= spcs
    .map(spcs =>{
        redisClient.get (spcs.name, JSON.stringify(spcs), redis.print); 
        return spcs.name
        });
        console.log(resget);
    return resget;
};

module.exports = setspaceship;
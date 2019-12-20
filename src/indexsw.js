var express = require('express')
const app = express();
var bodyParser = require('body-parser')
const redis =require('redis');
var redisClient = redis.createClient();
const getspaceShip = require('./getspaceShip')
const setsps = require('./setspaceship')
const filterspaceShip = require('./filterspaceShip')
const port=3000;

app.use(bodyParser.json());

app.post("/sw", async(req, res)=>{
  const resu = await getspaceShip();
  filterspaceShip(resu);
  res.status(200);
});

app.get("/:id", async(req, res)=>{
  const resget = await getspaceShip();
  setsps(resget);
  function jiij { 
    if(setsps(resget)=== req.params.id){
      redisClient.get (JSON.stringify(req.params.id)
    }
  
});

app.listen(port, ()=> console.log('example app listenning on port',port,'!'));
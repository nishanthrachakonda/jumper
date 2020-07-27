const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/game',function(req,res){
  res.sendFile(path.join(__dirname+'/../src/game.html'));
});

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/../src/index.html'));
});

//add the router
app.use('/', router);
app.use('/game', router);
app.use(express.static(path.join(__dirname+'/..')));
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');
const express = require('express');

const tshirtRouter = express.Router();


tshirtRouter.get('/all',(req,res)=>{

  res.send('HIT')
});


module.exports = tshirtRouter

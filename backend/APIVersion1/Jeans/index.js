const express = require('express');

const jeanRouter = express.Router();


jeanRouter.get('/all',(req,res)=>{
  res.send('HIT')
})

module.exports = jeanRouter

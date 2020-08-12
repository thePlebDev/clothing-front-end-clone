const express = require('express');

const trainerRouter = express.Router()


trainerRouter.get('/all',(req,res)=>{
  res.send('HIT')
})

module.exports = trainerRouter;

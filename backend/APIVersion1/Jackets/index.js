const express = require('express');
const jacketRouter = express.Router();

// jacketRouter.use((req,res)=>{
//   res.send('HIT')
// })

jacketRouter.get('/all',(req,res)=>{
  res.send('HIT')

})
module.exports = jacketRouter

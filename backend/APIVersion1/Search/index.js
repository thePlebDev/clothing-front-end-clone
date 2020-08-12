const express = require('express');

const searchRouter = express.Router();


searchRouter.get('/:item',(req,res)=>{

  res.send(req.params)
})

module.exports = searchRouter

const express = require('express');
const accessoriesRouter = express.Router();

accessoriesRouter.get('/all',(req,res)=>{
  res.send('all the accessories');
})

module.exports = accessoriesRouter

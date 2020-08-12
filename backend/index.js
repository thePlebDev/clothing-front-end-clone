const express = require('express');

const jacketRouter = require('./APIVersion1/Jackets')
const accessoriesRouter = require('./APIVersion1/Accessories')
const jeanRouter = require('./APIVersion1/Jeans')
const trainerRouter = require('./APIVersion1/Trainers')
const tshirtRouter = require('./APIVersion1/Tshirts')
const searchRouter = require('./APIVersion1/Search')

const app = express();
const port = 3001

app.use('/v1/jackets',jacketRouter);
app.use('/v1/jeans',jeanRouter);
app.use('/v1/tshirts',tshirtRouter);
app.use('/v1/accessories',accessoriesRouter);
app.use('/v1/trainers',trainerRouter);
app.use('/v1/search',searchRouter);


app.listen(port,()=>{
  console.log('the server is running on port--> ' +port);
})

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema({
  img: String,
  price:{type:Number,required:true},
  user:{type:Schema.Types.ObjectId,ref:'User'}
},{timestamps:true})

const Item = mongoose.model('Item',itemSchema)

module.exports = Item

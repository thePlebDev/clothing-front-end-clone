const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username:{type:String,unique:true,required:true}
},{timestamps:true})


userSchema.statics.findByLogin = async function (login){
  let user = await this.findOnde({
    email:login
  });
  if(!user){
    user = await this.findOne({email: login });
  }
  return user;
}

userSchema.pre('remove',function(next){
  this.model('Item').deleteMany({user:this._id},next);
})

const User = mongoose.model('User', userSchema);

module.exports = User;

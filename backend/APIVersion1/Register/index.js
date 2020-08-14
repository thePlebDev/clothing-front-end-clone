const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');

const User = require('../../models/users.js')

const registerRouter = express.Router();
registerRouter.use(bodyParser.urlencoded({extended:false}))
registerRouter.use(bodyParser.json())

registerRouter.post('/signup',function(req,res,next){
  const username = req.body.username;
  const password = req.body.password;

  User.findOne({ username:username},function(err,user){
    if(err){return next(err)}
    if (user){
      res.send('USER ALL READY EXISTS')
    }

    const newUser = new User({
      username,
      password
    });
    newUser.save(next)
  });
},passport.authenticate('login',{
  function(req,res){
    res.send('AUTHENTICATED')
  }
}))


module.exports = registerRouter

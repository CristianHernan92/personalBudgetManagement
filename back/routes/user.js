const Sequelize = require('sequelize')
const user = require("../models/User")
const passport = require("passport")

const express = require("express");
const router = express.Router();

router.post("/create",(req,res,next)=>{
    user.findOne({where:{email:req.body.email}})
    .then(result=>{
        if(result!=null)
            res.send({message: 'The email ingresed is in use, choose other !!!'})
        else
            user.create(req.body)
            .then(result=> res.send({result}))            
    })    
})

//passport login
router.post('/login', function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
      if (err)
        return next(err)
      if (!user)
        return res.send(info)
      else
        req.logIn(user, function(err) {
            if (err) { return next(err); }
            return res.send(user)
        });
    })(req, res, next);
});

router.get("/logout", (req, res) => {
  req.logOut();
  res.send();
});

router.get("/get", (req, res, next) => {
  if(req.user)  
    res.send(req.user)
  else
  res.send({})
});

module.exports = router
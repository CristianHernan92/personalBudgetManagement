const Location = require("../models/Location")

const express = require("express");
const router = express.Router();

router.get("/traer/:id",(req,res,next)=>{
    Location.findByPk(req.params.id).then((result)=>{
        res.send(result)
    }).catch(err=>{
        console.log(err)
    })
})


module.exports = router
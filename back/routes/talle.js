const Waist = require("../models/Waist")

const express = require("express");
const router = express.Router();

router.get("/traer/:id",(req,res,next)=>{
    Waist.findByPk(req.params.id).then((result)=>{
        res.send(result)
    }).catch(err=>{
        console.log(err)
    })
})

module.exports = router
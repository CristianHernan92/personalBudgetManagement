const Category = require("../models/Category")

const express = require("express");
const router = express.Router();

router.get("/traer/:id",(req,res,next)=>{
    Category.findByPk(req.params.id).then((result)=>{
        res.send(result)
    }).catch(err=>{
        console.log(err)
    })
})

module.exports = router
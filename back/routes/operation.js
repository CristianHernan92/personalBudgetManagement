const operation = require("../models/Operation")

const express = require("express");
const router = express.Router();

router.post("/create",(req,res,next)=>{
    let data=req.body
    /* { concept: 'aa', amount: '1', date: '2021-01-02', type: '1' } */
    operation.create({
        concept:data.concept,
        amount:data.amount,
        date:data.date,
        typeId:data.type        
    }).then(result=>{        
        res.send(result);
    }).catch(err=>{
        console.log(err)
    })
})

router.get("/bringallentryes",(req,res,next)=>{
    operation.findAll({ where: { typeId: 1 }}).then((result)=>{
        res.send(result)
    }).catch(err=>{
        console.log(err)
    })
})


router.get("/bringallegresses",(req,res,next)=>{
    operation.findAll({ where: { typeId: 2 }}).then((result)=>{
        res.send(result)
    }).catch(err=>{
        console.log(err)
    })
})


module.exports = router
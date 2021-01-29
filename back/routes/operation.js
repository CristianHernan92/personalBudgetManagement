const Sequelize = require('sequelize')
const operation = require("../models/Operation")

const express = require("express");
const router = express.Router();

router.post("/create",(req,res,next)=>{
    let data=req.body
    operation.create({
        concept:data.concept,
        amount:data.amount,        
        date:data.date,
        typeId:data.type,
        userId:data.id       
    })
    .then(result=> res.send({result}))
})

router.get("/bringallentries/:id",(req,res,next)=>{
    operation.findAll({ where: { typeId: 1,userId:req.params.id}}).then((result)=>{
        res.send(result)
    })
    .catch(err=>{
        console.log(err)
    })
})

router.get("/bringallegresses/:id",(req,res,next)=>{
    operation.findAll({ where: { typeId: 2,userId:req.params.id}}).then((result)=>{
        res.send(result)
    })
    .catch(err=>{
        console.log(err)
    })
})

router.get("/bringlasttenoperations/:id",(req,res,next)=>{
    operation.findAll({where:{userId: req.params.id }},{limit:10,order: [['id']]}).then((result)=>{           
        res.send(result)
    })
    .catch(err=>{
        console.log(err)
    })
})

router.get("/totalentriesandegresses/:id",(req,res,next)=>{
    operation.findAll({attributes: [[Sequelize.fn('sum', Sequelize.col('amount')), 'entries']],where:{typeId:1,userId:req.params.id}})
    .then(totalentries=>operation.findAll({attributes: [[Sequelize.fn('sum', Sequelize.col('amount')), 'egresses']],where:{typeId:2,userId:req.params.id}})
    .then(totalegresses=> {
        let objeto={totalentries:totalentries[0].dataValues.entries,totalegresses:totalegresses[0].dataValues.egresses}        
        if(objeto.totalentries==null){
            objeto.totalentries=0
        }            
        if(objeto.totalegresses==null){
            objeto.totalegresses=0
        }            
        res.send(objeto)}))
    .catch(err=>{
        console.log(err)
    })
})

router.post("/delete",(req,res,next)=>{
    operation.destroy({where:{id:req.body.id}})
    .then(result=> res.send({result}))
})

router.post("/update",(req,res,next)=>{
    operation.update({concept:req.body.concept,amount:req.body.amount,date:req.body.date},
        {where:{id:req.body.id}})
    .then(result=> res.send({result}))
})

module.exports = router
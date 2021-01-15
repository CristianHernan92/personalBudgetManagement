//requiero Sequelize para poder llamar a la  operación 'like' (Sequelize.Op.Like)
const Sequelize = require('sequelize');

const Product = require("../models/Product")

const express = require("express");
const { NUMBER } = require('sequelize');
const router = express.Router();

router.post("/agregar",(req,res,next)=>{
    let objeto=req.body
    Product.create({  
        name:objeto.nombre,
        price:parseFloat(objeto.precio),
        stock:parseInt(objeto.stock),
        description:objeto.descripcion ,
        image:objeto.imagen,
        categorieId:parseInt(objeto.categoria),
        locationId:parseInt(objeto.localidad),
        waistId:objeto.talle,
    }).then(result=>{        
        res.send(result);
    }).catch(err=>{
        console.log(err)
    })

})


router.get("/traertodos",(req,res,next)=>{
    Product.findAll().then((result)=>{
        res.send(result)
    }).catch(err=>{
        console.log(err)
    })
})

router.post("/traercoincidentes",(req,res,next)=>{
    let valor= req.body.value.valor
    var categoría=parseInt(req.body.value.categoría)
    let localidad=parseInt(req.body.value.localidad)
    let ordenarporprecio=req.body.value.ordenarporprecio
    let consulta

    if(categoría===0&&localidad===0)
        consulta={ where: { name: { [Sequelize.Op.iLike]: '%'+valor+'%'} },order: [['price', ordenarporprecio]] }
    else if(categoría!=0&&localidad!=0)
        consulta={ where: { name: { [Sequelize.Op.iLike]: '%'+valor+'%'}, [Sequelize.Op.and]: {categorieId: categoría}, [Sequelize.Op.and]: {locationId: localidad} } ,order: [['price', ordenarporprecio]]}
    else if (categoría!=0)
        consulta={ where: { name: { [Sequelize.Op.iLike]: '%'+valor+'%'}, [Sequelize.Op.and]: {categorieId: categoría}},order: [['price', ordenarporprecio]]}
    else
        consulta={ where: { name: { [Sequelize.Op.iLike]: '%'+valor+'%'}, [Sequelize.Op.and]: {locationId: localidad}},order: [['price', ordenarporprecio]]}

    Product.findAll(consulta).then((result)=>{ 
        res.send(result)
    }).catch(err=>{
        console.log(err)
    })
})

module.exports = router
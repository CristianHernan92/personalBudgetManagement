const passport = require("passport")
const User = require("../models/User")

const express = require("express")
const router = express.Router()

router.post("/crearusuariobasico",(req,res,next)=>{    
    let objeto=req.body
    User.create({        
        name:objeto.nombre,
        lastname:objeto.apellido,
        password:objeto.contraseña,
        email:objeto.email,
        phone:objeto.telefono,
        adress:objeto.dirección,
        rol:objeto.rol,                            
    }).then(user=>{        
        res.send(user);
    }).catch(err=>{
        console.log(err)
    })
})

//acá pasara por la autenticación de passport en donde verificara que la contraseña coincida y el email también y si está todo ok se inicializara la sesión y retornara de deserealize
router.post("/login",passport.authenticate("local"),(req,res,nex)=>{
    res.send(req.user)
})


module.exports = router
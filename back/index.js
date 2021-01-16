const express=require("express");
const app= express();
const {db}=require("./models/index");
const volleyball=require("volleyball");
const path=require("path")
const router=require('./routes/index')

app.use(volleyball);

//Bodyparsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//requerido para que nos tome el index.hml
app.use(express.static(__dirname+"/public"))

app.use("/",router);

app.get("/*",(req,res,next)=>{
    res.sendFile(__dirname+"/public/index.html")
})

//error middleware
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send(err);
});

db.sync({force:false}).then(app.listen("3000",()=>{
    console.log("runing in port 3000 !!!");
}))

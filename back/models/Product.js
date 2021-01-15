const sequelize=require("sequelize");
const db=require("../db/index")


class Product extends sequelize.Model{};

Product.init({     
    id:{
        type:sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },  
    name:{
        type: sequelize.STRING,
        allowNull:false,
    },
    price:{
        type: sequelize.REAL,
        allowNull:false,
    },
    stock:{
        type:sequelize.INTEGER, 
        allowNull:false,
    },
    description:{
        type:sequelize.TEXT,
        allowNull:false,
    },
    image:{
        type:sequelize.TEXT,
        allowNull:false,
    } 
},{
    sequelize:db,
    modelName:"product",
})

Product.beforeCreate((product)=>{
    if(product.stock==0){
        product.name+="(sin Stock)"
    }
})

Product.beforeUpdate((product)=>{
     if(product.stock==0){
        if(product.name.includes("(sin Stock)")===false){
            product.name+="(sin Stock)"
        }
    }
    else{
        if(product.name.includes("(sin Stock)")){
            product.name=product.name.substring(0,product.name.length-11)
        }
    } 
})


module.exports=Product;
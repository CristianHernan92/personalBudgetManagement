const sequelize=require("sequelize");
const db=require("../db/index")


class Type extends sequelize.Model{};

Type.init({     
    id:{
        type:sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    name:{
        type:sequelize.STRING,
    }
},{
    sequelize:db,
    modelName:"type",
})


module.exports=Type;
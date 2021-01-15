const sequelize=require("sequelize");
const db=require("../db/index")


class Waist extends sequelize.Model{};

Waist.init({     
    id:{
        type:sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    name:{
        type:sequelize.STRING,
        allowNull:false
    },
},{
    sequelize:db,
    modelName:"waist",
})

module.exports=Waist;
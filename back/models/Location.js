const sequelize=require("sequelize");
const db=require("../db/index")


class Location extends sequelize.Model{};

Location.init({     
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
    modelName:"location",
})

module.exports=Location;
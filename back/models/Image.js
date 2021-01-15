const sequelize=require("sequelize");
const db=require("../db/index")


class Image extends sequelize.Model{};

Image.init({     
    id:{
        type:sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    url:{
        type:sequelize.STRING,
    }
},{
    sequelize:db,
    modelName:"image",
})


module.exports=Image;
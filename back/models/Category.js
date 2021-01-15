const sequelize=require("sequelize");
const db=require("../db/index")


class Category extends sequelize.Model{};

Category.init({     
    id:{
        type:sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    name:{
        type:sequelize.STRING,
        unique:true,
    }
},{
    sequelize:db,
    modelName:"categorie",
})


module.exports=Category;
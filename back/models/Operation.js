const sequelize=require("sequelize");
const db=require("../db/index")


class Operation extends sequelize.Model{};

Operation.init({  
    id:{
        type:sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    concept:{
        type:sequelize.STRING,
        allowNull:false
    },
    amount:{
        type:sequelize.REAL,
        allowNull:false
    },
    date:{
        type:sequelize.DATE,
        allowNull:false
    },
},{
    sequelize:db,
    modelName:"operation",
})

module.exports=Operation;
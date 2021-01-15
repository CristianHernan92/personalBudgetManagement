const sequelize=require("sequelize");
const db=require("../db/index")


class OrderPurchase extends sequelize.Model{};

OrderPurchase.init({
    id:{
        type:sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    state:{
        type:sequelize.ENUM(["pendiente","completado"])
    }
},{
    sequelize:db,
    modelName:"order_purchase",
})


module.exports=OrderPurchase;
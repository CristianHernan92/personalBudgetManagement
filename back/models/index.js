/* const Product=require("./Product")
const User=require("./User")
const Image= require("./Image")
const Category=require("./Category")
const OrderPurchase=require("./OrderPurchase")
const Location=require("./Location")
const Waist=require("./Waist") */

const Operation=require("./Operation")
const Type= require("./Type")


Type.hasMany(Operation)

const db=require("../db/index")

/* Product.belongsToMany(User,{through: OrderPurchase})
Product.belongsToMany(User,{through: "favorites"})
Location.hasMany(Product)
Category.hasMany(Product)
Product.hasMany(Image)
Waist.hasMany(Product) */

/* module.exports = {db,Product,User,Image,Category,OrderPurchase,Location,Waist} */
module.exports = {db}


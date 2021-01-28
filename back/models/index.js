const Operation=require("./Operation")
const Type= require("./Type")
const User= require("./User")

Type.hasMany(Operation)
User.hasMany(Operation)

const db=require("../db/index")

module.exports = {db,User}


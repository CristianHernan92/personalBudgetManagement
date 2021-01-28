const sequelize=require("sequelize");
const db=require("../db/index")
const bcrypt = require("bcrypt")


class User extends sequelize.Model{
    hashear(password, salt) {
        return bcrypt.hash(password, salt);
    }
}

User.init({  
    id:{
        type:sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    name:{
        type:sequelize.STRING,
        allowNull:false
    },
    lastName:{
        type:sequelize.STRING,
        allowNull:false
    },
    email:{
        type:sequelize.STRING,
        allowNull:false,
        unique:true,
        validate:{
            isEmail:true,
        }
    },
    password:{
        type:sequelize.STRING,
        allowNull:false,
    },
    salt:{
        type:sequelize.STRING,
    }
},{
    sequelize:db,
    modelName:"user",
})

User.beforeCreate((user) => {
    return bcrypt
      .genSalt(16)
      .then((salt) => {
        user.salt = salt;
        return user.hashear(user.password, salt);
      })
      .then((hash) => {
        user.password = hash;
      });
  });

module.exports=User;
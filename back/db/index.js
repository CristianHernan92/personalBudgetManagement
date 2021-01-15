const sequelize=require("sequelize");
db=new sequelize("postgres://localhost:5432/personalbudgetmanagement",{
    logging:false,
    dialect:"postgres",
});

module.exports=db;

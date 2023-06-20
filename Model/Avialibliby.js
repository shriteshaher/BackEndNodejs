const Sequelize = require("Sequelize");
const connection=require("../Connection/con")

const  aviailiblity=connection.define('aviailiblity',
    {
       bussiness_name:{
        type:Sequelize.STRING

       },
       timeslots:{
        type: Sequelize.TIME,
        unique:true
       }
       

      
    }
)

module.exports=aviailiblity
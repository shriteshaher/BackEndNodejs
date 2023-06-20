const Sequelize = require("Sequelize");
const connection=require("../Connection/con")

const account=connection.define('account',
    {

       email:{
          type:Sequelize.STRING
       },
       business_name:{
         type:Sequelize.STRING
       },
       password:{
        type:Sequelize.STRING
       },
       token:{
        type:Sequelize.STRING
       }
    }
)

module.exports=account
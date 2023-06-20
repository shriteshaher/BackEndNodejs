const Sequelize = require("Sequelize");
const connection=require("../Connection/con")

const Bussiness=connection.define('bussiness_detail',
    {
        name:{
            type:Sequelize.STRING
        },
       business_name:{
        type:Sequelize.STRING

       },
       email:{
          type:Sequelize.STRING,
          unique:true
       },
       mobile_no:{
          type:Sequelize.DECIMAL(10)
         
       },
       business_address:{
        type:Sequelize.STRING
       }
       

      
    }
)

module.exports=Bussiness
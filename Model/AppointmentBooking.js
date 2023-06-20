const Sequelize = require("Sequelize");
const connection=require("../Connection/con")


const  appointment_booking=connection.define('appointment_booking',
    {
       name:{
        type:Sequelize.STRING(20)

       },
       appointment_business_booking:{
        type:Sequelize.STRING(20)
       },
       email:{
        type:Sequelize.STRING
       },
       mobile_no:{
        type:Sequelize.STRING
       },
       address:{
        type:Sequelize.STRING
       },
       booked_time:{
        type:Sequelize.TIME
       },
       booked_date:{
           type:Sequelize.DATE,
           default:new Date()
       },
       status:{
        type:Sequelize.STRING,
        defaultValue:"Not Yet Confirmed"
       },
       

      
    },
    {
        indexes: [
            {
                unique: true,
                fields: ['email','booked_time','booked_date' ]
            }
        ]
    }
)

module.exports=appointment_booking
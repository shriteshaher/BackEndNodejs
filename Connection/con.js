const Sequelize=require('sequelize')
const mysql=new Sequelize('appointment_scheduling','root','shritesh123',{
    dialect:'mysql',host:'localhost',port:'3306'
})

module.exports=mysql
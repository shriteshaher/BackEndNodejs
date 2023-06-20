const account=require('../Model/Acoount')
const log=require('../logger/log');
account.sync()

const jwt=require('jsonwebtoken')
const encrypt=require('bcryptjs')
const { json } = require('express')

const signup=async(req,res,next)=>{
    
     const{ email,password,business_name}=req.body
     
     account.findOne({
        where:{
        email:email
        }
     }
     ).then((result)=>{
        if(result){
          return res.status(200).json("User Is Already Exist")
        }
     })
     
    const accountData=account.build({
        email:email,
        password:await encrypt.hash(password,10),
        business_name:business_name
     })

     
      accountData.save().then((result)=>{
        log.info("ACCOUNT TABLE:"+result)
         return res.status(200).json("Use Created")
     }).catch((err)=>{
        log.error("Create ACCOUNT TABLE:"+err)
        //  res.status(200).json(err)
     })
    
    
     
     
}

const login=async(req,res)=>{
   

   const{ email,password}=req.body
   
   const verify= account.findOne({where: {email:email}})
    
    verify.then(async(verify)=>{
        
         if(verify){
          console.log(verify.password,password,await encrypt.compare(password,verify.password))
            if(await encrypt.compare(password,verify.password)){
           // Create token
             const token = jwt.sign({ id: verify.id, email },process.env.TOKEN_KEY,{expiresIn: "5min",} )
             verify.token=token
             
             verify.save()
             
             return res.status(200).json({email:email,token:token,business_name:verify.business_name})
            }
            else{
              return res.status(200).json("Password Is Not Exist")
            }
        }
        else{
            return res.status(200).json("User Not Exist")
        }
     
  }).catch((err)=>{
    if(err){
        log.error("For Login Account Table Error"+err)
    }
  })
}




module.exports={
    login,signup

}
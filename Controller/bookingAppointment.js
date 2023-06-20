const appointment_booking=require('../Model/AppointmentBooking')
const log=require('../logger/log');
const { read } = require('../logger/log');
appointment_booking.sync()

const appointment_b=(req,res,next)=>{
    
    appointment_booking.create(
        req.body
    ).then((result)=>{
        return res.status(200).json("Appointment Is Applied")
    }).catch((err)=>{
        if(err.name=="SequelizeUniqueConstraintError"){
         return res.status(200).json("Appointment Is Already Applied")
        }
        log.error("Error Creating AppointmentBooking Table:"+err)
      
    })
}

const appointment_fetching=(req,res,next)=>{
        console.log(req.query.bs_name)
        appointment_booking.findAll({
            where:{
                appointment_business_booking:req.query.bs_name
            }
        }
        ).then((result)=>{
            console.log(result)
            res.status(200).send(result)
        }).catch(err=>{
           
            log.error("Finding Bussness Name By APPOINTMENT TABLE ERROR OCCURRED:"+err)
           

            
        })
    
}


const appointment_Update=(req,res,next)=>{
    console.log(req.query,req.query['status'])
    appointment_booking.findOne({
        where:{
            appointment_business_booking:req.query.bs_name,
            name:req.query.name
        }
    }
    ).then((result)=>{
        result.status=req.query.status
        result.save()
    }).catch(err=>{
        log.error("APPOINTMENT TABLE Update Booking ERROR OCCURRED:"+err)
        res.send(err)
    })

}

appointment_fetching_pa=(req,res,next)=>{
   appointment_booking.findAll({where:{
    email:req.query.email
   }}).then((result)=>{
      if(result.length==0) return  res.json("The Data Not Found")
      res.json(result)
   }).catch((err)=>{
   log.error("Finding By Email Appoointmet Table Error Is Occurred:"+err)
   })
    
}

module.exports={
    appointment_b,appointment_fetching,appointment_Update,appointment_fetching_pa
}
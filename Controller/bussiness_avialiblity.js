const bussiness_availiblity=require('../Model/Avialibliby')
const log=require('../logger/log');
bussiness_availiblity.sync()

const bussiness_av=(req,res,next)=>{
    bussiness_availiblity.create(
        { bussiness_name:req.body.bussiness_name,
            timeslots:req.body.time_slots}
    ).then((result)=>{
        
        
    }).catch((err)=>{
        console.log(err)
        if(err.name=="SequelizeUniqueConstraintError"){
              console.log(err.name)
             return res.json("The TimeSlots Is Already Add Applied")
        }
        log.error("Inserting BUSINESS AVAILIBLITY TABLE:"+err)
       
    })
}

const bussiness_fetcher_time=(req,res,next)=>{
  if(req.query.bs_name){
    bussiness_availiblity.findAll({
        where:{
            bussiness_name:req.query.bs_name
        }
    }
    ).then((result)=>{
       
        return res.status(200).json(result)
    }).catch((err)=>{
        console.log(err)
        log.error(err);
        res.status(500).json(err)
        
    })
}
else{
   
    bussiness_availiblity.findAll().then(
        res1=>{
            res.json(res1)
        }
    ).catch((err)=>{
        log.error("Fetch All Data From Availablity Table :"+err)
    })
}
}


const bussiness_fetcher_time_delete=(req,res,next)=>{
    // console.log(req.query)
    bussiness_availiblity.destroy({ where :{bussiness_name:req.query.bs_name,timeslots:req.query.time_slots}}).then((result)=>{
        
        return res.status(200).json(result)
    }).catch((err)=>{
        log.error("Fetching Table Availiblity By Name "+err);
       
        
    })
}





module.exports={bussiness_av,bussiness_fetcher_time,
    bussiness_fetcher_time_delete}
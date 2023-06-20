const bussiness_detail=require('../Model/Bussiness')
const log=require('../logger/log');
bussiness_detail.sync()


const bussiness_form=(req,res,next)=>{
    bussiness_detail.create(
        req.body
    ).then((result)=>{
        if(result){
            // return res.status(200).send("Detail SuccessFull Entered")
        }
       
    }).catch((err)=>{
        log.error("Creating Bussiness Detail Table: "+err)
       
    })
}

const bussiness_detail_fetcher=(req,res,next)=>{
    bussiness_detail.findAll().then(
        (result)=>{
            res.status(200).json(result)
        }
    ).catch(err=>{
        log.error("Fetching Bussiness Detail Table: "+err)
    
    })
}

module.exports={
    bussiness_form,bussiness_detail_fetcher
}
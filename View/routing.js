const app=require('../app')
const log=require('../logger/log');
const controllerLogin=require('../controller/loginSign')
const auth=require('../middleware/jwtVerifyer')
const bodyParser = require('body-parser')
const controllerBussiness=require('../Controller/businessDetail')
const controllerAvailiblity=require('../Controller/bussiness_avialiblity')
const controllerBooking=require('../Controller/bookingAppointment');
const { application } = require('express');
// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
// app.use(bodyParser.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', '*');
    res.header("Access-Control-Allow-Headers", "*");
    if ('OPTIONS' == req.method) {
        console.log(req.method)
       res.sendStatus(200);
     }
     else {
       next();
     }});

//Login Crediatianal
app.post('/signup', controllerLogin.signup)
app.post('/login', controllerLogin.login)


//Bussiness Detail 

app.post('/bussiness_detailFill',controllerBussiness.bussiness_form)
app.get('/appointment_Update',auth,controllerBooking.appointment_Update)

//Bussiness Availablity

app.post('/bussiness_availiblity',auth,controllerAvailiblity.bussiness_av)
app.get('/fetch_appointment_availiblity',auth,controllerAvailiblity.bussiness_fetcher_time)
app.get('/fetch_booking_data',auth,controllerBooking.appointment_fetching)
app.delete('/bussiness_fetcher_time_delete',controllerAvailiblity.bussiness_fetcher_time_delete)
//Appointment Booking
app.post('/appointment_booking',controllerBooking.appointment_b)
app.get('/fetch_appointment_bussiness',controllerBussiness.bussiness_detail_fetcher)
app.get("/fetch_time_slots",controllerAvailiblity.bussiness_fetcher_time)
app.get('/fetch_booking_data_pa',controllerBooking.appointment_fetching_pa)

app.listen(process.env.PORT_NO,()=>{
console.log("Server Is Successfully Start Port No:"+process.env.PORT_NO)
log.info("Server Is Successfully Start Port No:"+process.env.PORT_NO)
})
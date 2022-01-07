const router = require('express').Router()
const Station = require('../model/Station')
const isAuthadmin = require('../middleware/isAuthadmin')
const isAuth = require('../middleware/isAuth')



//add station
router.post('/addstation',isAuthadmin,(req,res)=>{
    const{name,code,pumpnumber,pumptype,intervention,imgstation}=req.body
    const station= new Station({name,code,pumpnumber,pumptype,intervention,imgstation})
    station.save()
       .then(station=>res.send({"station": station}))
       .catch(error=>console.log(error))


})
//get station
router.get('/getstation',isAuth,(req,res)=>{
Station.find()
       .then(station=>res.send({"stations": station}))
       .catch(error=>console.log(error))


})
//editstation
router.put('/editstation/:_id',isAuthadmin,(req,res)=>{
const{_id}=req.params
const{name,code,pumpnumber,pumptype,intervention,imgstation}=req.body
Station.findByIdAndUpdate({_id},{$set:{name,code,pumpnumber,pumptype,intervention,imgstation}})
       .then(station=>res.send({"stationmodified": station}))
       .catch(error=>console.log(error))
})
//deletesation
router.delete('/deletestation/:_id',isAuthadmin,(req,res)=>{
const{_id}=req.params
Station.findByIdAndDelete({_id})
       .then(station=>res.send({"station has been delete": station}))
       .catch(error=>console.log(error))
})
module.exports=router
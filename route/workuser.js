const router = require('express').Router()
const Station = require('../model/Station')
const isAuthuser = require('../middleware/isAuthuser')
//editstationuser
router.put('/editstationuser/:_id',isAuthuser,(req,res)=>{
const{_id}=req.params
const{pumpnumber,pumptype,intervention}=req.body
Station.findByIdAndUpdate({_id},{$set:{pumpnumber,pumptype,intervention}})
       .then(station=>res.send({"stationmodifiedbyuser": station}))
       .catch(error=>console.log(error))
})


router.get('/getstationuser',isAuthuser,(req,res)=>{
Station.find()
       .then(station=>res.send({"stations": station}))
       .catch(error=>console.log(error))


})
//get one station  by user 
router.get('/getonestationuser/:id',isAuthuser,(req,res)=>{
       let {_id} = req.params;

        Station.findById({_id})
       .then(station=>res.send({"onestation": station}))
       .catch(error=>console.log(error))


})

module.exports=router
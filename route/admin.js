const router = require('express').Router()
const User = require('../model/User')
const bcrypt = require("bcrypt")
//add user


//get all users
router.get('/getuser',(req,res)=>{
User.find()
       .then(user=>res.send({"users": user}))
       .catch(error=>console.log(error))


})
//get one user
router.get('/getuser/:id',(req,res)=>{
       let {_id} = req.params;

        User.findById({_id})
       .then(user=>res.send({"oneuser": user}))
       .catch(error=>console.log(error))


})

//edituser
router.put('/edituser/:_id',async(req,res)=>{
const{_id}=req.params
const{name,password,email}=req.body
console.log("object",password)
try {
       if(password!=="")
      { const salt = 10 
const hashedpassword = await bcrypt.hash(password ,salt) ;

let user=await User.findByIdAndUpdate({_id},{name:name,password:hashedpassword,email:email})
res.send({"user modified": user})
}
else{
       let user=await User.findByIdAndUpdate({_id},{name:name,email:email})
res.send({"user modified": user})
}
} 
catch (error) {
    console.log(error)   
}
})
// user.password = hashedpassword ;password:hashedpassword,


       
//deleteuser
router.delete('/deleteuser/:_id',(req,res)=>{
const{_id}=req.params
User.findByIdAndDelete({_id})
       .then(user=>res.send({"user has been delete": user}))
       .catch(error=>console.log(error))
})
module.exports=router
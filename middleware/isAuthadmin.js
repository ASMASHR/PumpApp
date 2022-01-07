const jwt = require('jsonwebtoken')
const User = require('../model/User')

module.exports = async (req, res , next) =>{
try{
const token = req.headers["authorization"]
if(!token){
    return res.status(400).send({ msg : "unauthorized"})
}
const decoded = await jwt.verify(token , process.env.secretOrkey)
const user = await User.findById(decoded._id).select("-password")
if ((!user)||(user.role!==1)){
    return res.status(400).send({ msg : "unauthorized"})
}
req.user = user
// console.log(decoded)
next();
}catch(error){
    return res.status(400).send({ msg : "unauthorized"})
}
}
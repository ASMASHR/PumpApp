const router = require('express').Router()
const User = require('../model/User')
const bcrypt = require("bcrypt")
const {validator , loginRules , registerRules} = require('../middleware/bodyValidator')
const jwt = require('jsonwebtoken')
const isAuth = require('../middleware/isAuth')

router.post("/register" , registerRules(), validator  ,  async (req , res )=>{

const { name  ,email , password,role} =req.body
try{
let user = await User.findOne({email})
if(user)
{
    return res.status(400).send({msg : "user already exist"})
}

user = new User ({
    name 
    ,email , 
    password,
    role
})
// hash the password
const salt = 10 
const hashedpassword = await bcrypt.hash(password ,salt) ;
user.password = hashedpassword ;
await user.save()




const payload ={
    _id : user._id
}
const token = await jwt.sign(payload , process.env.secretOrkey)


res.status(200).send({msg : "user saved " , user , token})
}catch(error)
{
    res.status(500).send({msg : "error server " })
}
    res.send({msg : "register"})
})
router.post("/login" , loginRules(),validator, async (req , res )=>{
    const { email , password} = req.body
    try{
       const user = await User.findOne({email})
       if(!user)
       {
        return res.status(400).send({msg : "bad credential email"})
       }
        const isMatch= await bcrypt.compare(password , user.password) ;

        if(!isMatch)
        {
        return res.status(400).send({msg : "bad credential password"})
       
        }

        const payload ={
            _id : user._id
        }
    const token = await jwt.sign(payload , process.env.secretOrkey)
        res.status(200).send({msg : "login Success" , user :convertUser(user) ,token})
    }
    catch(error)
    {
        return res.status(500).send({msg : "error server"})
        console.log(error)
    } 
    })


    
     router.get('/dashborduser' ,isAuth ,(req , res)=>{
       res.status(200).send({user : req.user})
    })
module.exports = router
const convertUser =({name , email , _id})=>({
    name ,
    email ,
    _id 
})
//register sera add user avec salt etc
//middleware dans tout les crudes
//auth dans tout les cruds
//new middleware test role else next 
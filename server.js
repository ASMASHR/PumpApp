const express = require('express')
const connectDB = require('./config/connectDB')
const app = express()
app.use(express.json())

const authRouter = require('./route/auth')
const workadminRouter = require('./route/workadmin')
const workuserRouter = require('./route/workuser')
const adminRouter = require('./route/admin')
const port = process.env.PORT || 5001 

 connectDB()
 

 app.use('/api/auth' , authRouter)
  app.use('/api/workadmin' , workadminRouter)
   app.use('/api/workuser' , workuserRouter)
    app.use('/api/admin' , adminRouter)
app.listen(port , (err)=>{
    err ? console.log(err) : console.log(`the server is runing on port ${port}`)
}) 

const express = require('express')
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require('nodemailer')
require('dotenv').config()
const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.post('/api/sendmail',(req,res)=>{

const transport=nodemailer.createTransport({
    service:'gmail',
    host:'smtp.gmail.com',
    port:465,
    secure:true,
     auth:{
      user:'tt0603647@gmail.com',
      pass:'azertyui1234'
    } 
})
 transport.sendMail({
    from:process.env.MAIL_FROM,
    to:"contact@kadri-hamza.com",
    subject:"contact",
    html: `<p>${req.body.prenom},${req.body.nom}</p>
    <br/>
    <p>${req.body.tel}</p>
    <br/>
    <p>Email:${req.body.email}</p>

    
    
    `
    
}).then(()=>{
   res.status(200).json({message:"email envoyer"}) 
})
.catch((err)=>{
    res.status(400).json({message:'error'})
    console.log(err)
})
})





  




const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
    console.log(`server is runnig on port ${4001}`)
})
const express= require('express');
const User=require('../Models/User')
const router=express.Router();
router.get('/',(req,res)=>{
    console.log(req);
    const user=User(req.body);
    user.save()
res.send(req.body)
})
module.exports=router
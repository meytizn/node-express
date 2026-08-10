const express = require("express")
const router =express.Router()



router.get("/register" ,(req,res)=>{  
    res.send("register form ")
})

router.post("/register" ,(req,res)=>{
    res.send("post was successfull ")
} )



module.exports=router
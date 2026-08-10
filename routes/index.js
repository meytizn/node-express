const express = require("express")
const router =express.Router()



router.get("/", (req,res)=>{
    res.send("hello express")
})


router.get("/about", (req,res)=>{
    res.send("about us ")
})


module.exports=router
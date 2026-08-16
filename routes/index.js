const express = require("express")
const router =express.Router()



router.get("/", (req,res)=>{

    res.render('home')

    // using cookie 
    // res.cookie("test","cookie for test").render('home');
    // res.cookie("hi","cookie for hi",{maxAge:10000}).render('home');
    // console.log(req.cookies)
    // console.log(req.cookies.hi)
    // res.clearCookie("test").render('home')

})


router.get("/about", (req,res)=>{
    res.send("about us ")
})


module.exports=router
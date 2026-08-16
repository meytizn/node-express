const express = require("express")
const session = require("express-session")
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
    
    res.send(`about us`)

    // using session 
    // if(req.session.show_about){
    //     req.session.show_about++;
    // }
    // else{
    // req.session.show_about++;
    // }
    // res.send(`about us ${req.session.show_about}`)

    // delete req.session.show_about;
    // req.session.destroy();


})


module.exports=router
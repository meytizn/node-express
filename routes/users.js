const express = require("express")
const router =express.Router()



router.get("/register" ,(req,res)=>{  
    res.render("registerForm")
})

router.post("/register" ,(req,res)=>{
  console.log(req.body.username);
  console.log(req.body.email);
  res.send("post was successfull ");
} )






router.get("/:id/:age", (req, res) => {
    
  const { id, age } = req.params

  if (!/^[0-9]{2}$/.test(age)) {
    return res.status(404).send("Invalid age")
  }

  res.send(`user id ${id} with age ${age} selected`)
})



router.get('/*splat' ,(req,res)=>{
    res.send(`Page Not Found`)
})

module.exports=router
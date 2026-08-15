const express = require("express")
const router =express.Router()

const User = require("../models/users")


router.get("/register" ,(req,res)=>{  
    res.render("registerForm")
})



router.post("/register", async (req, res) => {
  
  const userInfo = req.body;

  if (!userInfo.username || !userInfo.email || !userInfo.password) {
    return res.send("You can't leave blanks empty");
  }

  const newUser = new User({
    username: userInfo.username,
    email: userInfo.email,
    password: userInfo.password,
  });

  try {
    await newUser.save();
    res.send(`NEW USER ${newUser.username} added successfully.`);
  } 
  catch (err) {
    res.send(err);
  }

});




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
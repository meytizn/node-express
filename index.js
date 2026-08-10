const express = require("express")
const app = express()
const port = 3000 ;

app.get("/", (req,res)=>{
    res.send("hello express")
})


app.get("/register" ,(req,res)=>{res.send("register form ")} )
app.post("/register" ,(req,res)=>{res.send("post was successfull ")} )



app.listen( port , ()=>{ 
    console.log(`app is runnig on port ${port}`) 
} )



// nodemon index.js   to run app
const express = require("express")
const homeRouter = require("./routes/index")
const userRouter = require("./routes/users")
const app = express()
const port = 3000 ;


// routes
// app.use("/" ,homeRouter )
// app.use("/users" ,userRouter)




// public middlewar

const firstMid = function(req,res,next){
    req.activeTime = new Date().toLocaleTimeString()
    next()
}
app.use(firstMid)


// routes

app.get('/',(req,res)=>{
    res.send(`homepage with firstMid ${req.activeTime}`)
})


app.get('/about',
    // private middle war
    (req,res,next)=>{ console.log("private middle war ") ;next() },

    (req,res)=>{ 
        res.send(`homepage with firstMid ${req.activeTime}`)}

)




app.listen( port , ()=>{ 
    console.log(`app is runnig on port ${port}`) 
} )



// nodemon app.js   to run app
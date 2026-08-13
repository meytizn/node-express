const express = require("express")
const homeRouter = require("./routes/index")
const userRouter = require("./routes/users")
const app = express()
const port = 3000 ;


// template engin pug

app.set("view engine", "pug");
app.set("views", "./views");


// routes

app.use("/" ,homeRouter )
app.use("/users" ,userRouter)



// configuration

app.listen( port , ()=>{ 
    console.log(`app is runnig on port ${port}`) 
} )

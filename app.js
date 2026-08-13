const express = require("express")
const homeRouter = require("./routes/index")
const userRouter = require("./routes/users")
const app = express()
const port = 3000 ;


// template engin pug and addressing static and others folders

app.set("view engine", "pug");
app.set("views", "./views");

const path = require("path");
app.use('/static', express.static(path.join(__dirname,"public")));
app.use('/images', express.static(path.join(__dirname,"images")));

// routes

app.use("/" ,homeRouter )
app.use("/users" ,userRouter)



// configuration

app.listen( port , ()=>{ 
    console.log(`app is runnig on port ${port}`) 
} )

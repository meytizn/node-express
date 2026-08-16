const express = require("express")
const homeRouter = require("./routes/index")
const userRouter = require("./routes/users")
const app = express()
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/my_db")

const cookieParser = require("cookie-parser")
const session = require("express-session")

const port = 3000 ;


// template engin pug and addressing static and others folders

app.set("view engine", "pug");
app.set("views", "./views");

const path = require("path");
app.use('/static', express.static(path.join(__dirname,"public")));
app.use('/images', express.static(path.join(__dirname,"images")));


// middlewar
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(session({secret:"this is secret session "}))


// routes

app.use("/" ,homeRouter )
app.use("/users" ,userRouter)



// configuration

app.listen( port , ()=>{ 
    console.log(`app is runnig on port ${port}`) 
} )

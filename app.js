const express = require("express")
const homeRouter = require("./routes/index")
const userRouter = require("./routes/users")
const app = express()
const port = 3000 ;


// routes
app.use("/" ,homeRouter )
app.use("/users" ,userRouter)



app.listen( port , ()=>{ 
    console.log(`app is runnig on port ${port}`) 
} )



// nodemon app.js   to run app
const express = require("express")
const app = express()
const multer = require("multer")
const path = require('path') 


const userRoute = require("./routes/userRoute")

app.use(express.json())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


app.use("/user",userRoute)




app.listen(3000,()=>{
    console.log("started");
})
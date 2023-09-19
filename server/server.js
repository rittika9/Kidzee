const express=require('express');
const cors=require('cors');
const ConnectDb=require('./Config/db')
require('dotenv').config();
const path=require("path")
const ejs=require('ejs')
const bodyParser=require('body-parser');
const mongoose =  require('mongoose')




const app=express();
ConnectDb()

app.use(cors());


//Body Parser for Collection of Data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname,'Public')))
app.use('/uploads',express.static('uploads'))
app.set('view engine','ejs')
app.set('views',"views")

// API Port
const apiRouter=require("./Route/apiRouter");
app.use('/api',apiRouter);


// Admin Route

const adminRoute=require("./Route/adminRoute")
app.use(adminRoute)




const port=process.env.PORT || 4321;


app.listen(port,()=>{
    console.log(`server running port http://localhost:${port}`);
})

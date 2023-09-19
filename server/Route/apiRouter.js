const express=require('express');
const Route=express.Router();
const ApiController=require("../Controller/ApiController");


// Banner API
Route.get('/banner',ApiController.viewbanner)










module.exports=Route;
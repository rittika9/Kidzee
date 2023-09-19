const express=require('express');
const Router=express.Router();
const AdminController=require("../Controller/Admin/AdminController");
const DashboardController=require('../Controller/Admin/DashboardController');
const BannerController=require('../Controller/Admin/HomeContent/BannerController')
const uploadBanner=require('../Utility/bannerimage')


//****admin login logout */
Router.get("/",AdminController.index)

//***admin dashboard */
Router.get('/dashboard',DashboardController.admindashboard)

//***banner route */
Router.get('/banner/listing',BannerController.listing)
Router.get('/banner/addListing',BannerController.addlisting)
Router.post('/banner/createListing',uploadBanner.single('image'),BannerController.createlisting)
Router.get('/banner/editListing/:id',BannerController.editlisting)
Router.post('/banner/updateListing',BannerController.updatelisting)
Router.get('/banner/deleteListing/:id',BannerController.deletelisting)














module.exports=Router;
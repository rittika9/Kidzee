const { model } = require('mongoose')
const Banner=require('../Model/HomeContent/bannerModel')

const viewbanner=async(req,res)=>{
    try{

const bannerData=await Banner.find()
return res.status(200).json({
    success:true,
    message:"data fetch successfully",
    data:bannerData
})



    }catch(error){
        return res.status(404).json({success: false , message:"error"})
    }
}

module.exports={
    viewbanner
}
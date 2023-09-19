const mongoose=require("mongoose")
const Schema=mongoose.Schema
const BannerSchema=new Schema({

    title:{
        type:String,
        required:true
    },
   
    discription:{
        type:String,
        required:true
    },
    
    image:{
        type:String,
        required:true
    },

    // status:{
    //     type:String,
    //     default:0
    // },


},
{
    timestamps:true
}
)

const BannerModel=mongoose.model("bannerData",BannerSchema)
module.exports= BannerModel

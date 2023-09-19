const Banner=require("../../../Model/HomeContent/bannerModel")

const listing=async(req,res)=>{
    // res.render('HomeContent/Banner/listing',{
    //     title:"banner listing"
    // })



    try{
        const result=await Banner.find()
        res.render('HomeContent/Banner/listing',{
             data:result
        })
        console.log(result);
    }
    catch(err){
        console.log(err);
    }



}

const addlisting=(req,res)=>{
    res.render('HomeContent/Banner/addListing',{
        title:"banner listing"
    })

}

const createlisting=(req,res)=>{
   
    const Bannerdata = new Banner({
        title:req.body.title,
        discription:req.body.discription,

    })

    if(req.file){
        Bannerdata.image=req.file.path
       }


    Bannerdata.save().then((data)=>{
        console.log(data,'data added')
        res.redirect('/banner/listing')
    }).catch((error)=>{
        console.log(error)
        res.redirect('/banner/addListing')
    })

}


const editlisting=(req,res)=>{
    const id=req.params.id
    Banner.findById(id).then(data=>{
        console.log(data)
        res.render('HomeContent/Banner/editListing',{
            title:"edit-page",
            singledata:data
        })
    }).catch(err=>{
        console.log(err)
    })
}

const updatelisting=(req,res)=>{
    //console.log(image);
    const id=req.body.b_id
    const title=req.body.title
    const discription=req.body.discription

    
    Banner.findById(id).then((result)=>{
        result.title=title
        result.discription=discription

        
        
        return result.save().then(results=>{    
            res.redirect('/banner/listing')
            console.log(results,"update successfully")
        })
    }).catch(err=>{
        console.log(err,"update failed")
    })
    
 }



 const deletelisting=(req,res)=>{

    const id=req.params.id
    Banner.deleteOne({_id:id}).then(del=>{
        res.redirect('/banner/listing')
    }).catch((err)=>{
        console.log(err,"delete failed")
    })
}



module.exports={
    listing,addlisting,createlisting,editlisting,updatelisting,deletelisting
}
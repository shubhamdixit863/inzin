const indexService=require("../Services/indexService");
const indexContoller={};
indexContoller.registerUser=async(req,res)=>{

    console.log("got");
    res.json("hii");
}


indexContoller.userLogin=async(req,res)=>{
    let response=await indexService.getUserByUsername(req.body.username,req.body.password);
    res.json(response);
}

module.exports=indexContoller;
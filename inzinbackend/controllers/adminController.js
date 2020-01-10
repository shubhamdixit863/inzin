const adminService=require("../Services/adminService");
const adminController={};
adminController.registerUser=async(req,res)=>{

    console.log("got");
    res.json("hii");
}


adminController.userLogin=async(req,res)=>{
    console.log(req.body.username,req.body.password)
    console.log(typeof 9);//
    let response=await adminService.getUserByUsername(req.body.username,req.body.password);
    res.json(response);
}


adminController.getUsers=async(req,res)=>{
   res.json(await adminService.getAllUsers());
}

adminController.registerUser=async(req,res)=>{
  res.json(adminService.saveUser("logan","1234","admin",true));

}

module.exports=adminController;
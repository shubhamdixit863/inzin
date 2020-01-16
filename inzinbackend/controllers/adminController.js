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
  let username=req.body.username;
  let name=req.body.name;
  let email=req.body.email;
  let password=req.body.password;
  let role=req.body.role;
  let isactive=req.body.isactive || true;
  if(adminService.saveUser(username,password,role,isactive,name,email))
  {
    res.json({message:"Success",status:true});
  }
  else{
    res.json({message:"Failed",status:false});
  }
 

}
adminController.checkEmail=async(req,res)=>{
  if(adminService.checkExistingCredentials(req.body.username,"email"))
  {
    res.json({status:true});
  }
  else{
    res.json({status:false});
  }

}

adminController.checkUsername=async(req,res)=>{

  if(adminService.checkExistingCredentials(req.body.username,"username"))
  {
    res.json({status:true});
  }
  else{
    res.json({status:false});
  }

  
}
/**
 * Categories Controllers
 * 
 */

// Uploading the catgories

adminController.saveCategory=async(req,res)=>{
  console.log(req);
  
  req.body.photo_icon=req.files.image.path
  let resw=await adminService.saveCategory(req.body);
  console.log(resw);

  if(resw)
  {
    res.json({status:true,"message":"Category Added"})
  }

  else{
    res.json({status:false,"message":"Category Already exists"})
  }

  console.log(resw);
  


}

adminController.getParentsCategory=async(req,res)=>{
let parent_cate=await adminService.getParentCategories();
let response=parent_cate.map(ele=>ele.category_name);
  res.json({"categories":response});

  
}

// getting all categories using aggreagtion pipe line in node js

adminController.getAllCategories=async(req,res)=>{
  let data_res=await adminService.getParentCategories();
  let response=data_res.reduce((acc,{_id,parentCategory,isParent,category_name,seo_title,seo_heading,seo_slug,photo_icon,subcategories})=>{
    let new_parent_obj=

    {"_id":_id,
      "category_name":category_name ,
    "seo_title": seo_title,
    "seo_heading": seo_heading,
    "seo_slug": seo_slug,
    "photo_icon": photo_icon,
    "parentCategory":parentCategory,
    "isParent":isParent
  }
    acc.push(...subcategories);
    
    acc.push(new_parent_obj);
    return acc;

  },[])

  res.json(response);

}


module.exports=adminController;
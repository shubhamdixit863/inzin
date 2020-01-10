const adminMiddleware={};
adminMiddleware.registerUser=async(req,res,next)=>{

    console.log("got");
    next();
}


adminMiddleware.getUser=async(req,res,next)=>{

    //console.log("got");
    next();
}


module.exports=adminMiddleware;
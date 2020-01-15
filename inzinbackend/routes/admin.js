var express = require('express');
//ls =require('../../inzinfrontend/src/assets')
var router = express.Router();
const adminController=require("../controllers/adminController");
const adminMiddleware=require("../middlewares/adminMiddleware");
const  multipart  =  require('connect-multiparty');
const  multipartMiddleware  =  multipart({ uploadDir:  './uploads' });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



 /*
 Post Routes
 */

 router.post("/login",adminController.userLogin);
 router.post("/getUsers",adminController.getUsers);
 router.post("/registeruser",adminMiddleware.registerUser,adminController.registerUser);
 router.post("/checkEmail",adminMiddleware.registerUser,adminController.checkEmail);
 router.post("/checkUsername",adminMiddleware.registerUser,adminController.checkUsername);
 /**
  * Categories
  */


 router.post("/saveCategory",adminMiddleware.registerUser,multipartMiddleware,adminController.saveCategory);

 router.post("/getParentsCategory",adminMiddleware.registerUser,adminController.getParentsCategory);

 router.post("/getAllCategory",adminMiddleware.registerUser,adminController.getAllCategories);


 /**
  * Categories
  */
module.exports = router;

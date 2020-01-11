var express = require('express');
var router = express.Router();
const adminController=require("../controllers/adminController");
const adminMiddleware=require("../middlewares/adminMiddleware");

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
module.exports = router;

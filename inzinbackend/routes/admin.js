var express = require('express');
var router = express.Router();
const adminController=require("../controllers/adminController");
const adminMiddleware=require("../middlewares/adminMiddleware");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/user",adminMiddleware.registerUser,adminController.registerUser);
 /*
 Post Routes
 */

 router.post("/login",adminController.userLogin);
 router.post("/getUsers",adminController.getUsers);
module.exports = router;

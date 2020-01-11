const mongoose = require('mongoose');
// schema maps to a collection
const Schema = mongoose.Schema;

const categoriesSchema= new Schema({


    photo:String,
    parentcategory_name:String,
    category_name:String,
    title:String,
    heading:String,
    slug:String,
    cat_desc:String,
    content:String,
    keywords:String,
    subcartegories:[String]



});

module.exports = mongoose.model('categories', categoriesSchema);
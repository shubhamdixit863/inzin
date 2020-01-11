const mongoose = require('mongoose');
// schema maps to a collection
const Schema = mongoose.Schema;
const categorySchema=require("../models/categories");

const brandSchema=new Schema({

    brand_img:String,
    brand:String,
    heading:String,
    title:String,
    content:String,
    keywords:String,
    slug:String,
    description:String,
    category :[categorySchema],// ref from category
    parentcategory:String,
    business_partner:[ ],
    state:[String],
    district:[String],
    parent_category:String,
    special_category:String,
    slug:String,
    investment:String,
    business_exp:String,
    sizes:String,


});

module.exports = mongoose.model('brand', brandSchema);
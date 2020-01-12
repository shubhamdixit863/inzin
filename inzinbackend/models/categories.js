const mongoose = require('mongoose');
// schema maps to a collection
const Schema = mongoose.Schema;

const categoriesSchema= new Schema({


    photo_icon:String, // percategory one icon
    frontend_url:String,
    category_name:String,
    seo_title:String, // to be inserted in meta_tag
    seo_heading:String,
    seo_slug:String,
    seo_cat_desc:String,
    page_content_category:String, // to be shown on particular page of category
    seo_keywords:String,
    subcategories:[
        {
         category_name:String,
         frontend_url:String,
         seo_title:String, // to be inserted in meta_tag
         seo_heading:String,
         seo_slug:String,
         seo_cat_desc:String,
         page_content_category:String, // to be shown on particular page of category
         seo_keywords:String,

        }
  

    ]



});

module.exports = mongoose.model('categories', categoriesSchema);
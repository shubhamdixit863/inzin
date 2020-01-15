export interface CategoryModel{
    photo_icon:string, // percategory one icon
    category_name:string,
    seo_title:string, // to be inserted in meta_tag
    seo_heading:string,
    seo_slug:string,
    seo_category_Description:string, // to be shown on particular page of category
    seo_keywords:string,
    isParent:boolean,
}
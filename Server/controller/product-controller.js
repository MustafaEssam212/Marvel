const Product = require('../model/product-model');
const { body, validationResult, check } = require('express-validator');

const ProductController = {};


ProductController.UploadThumbnail = async (req, res, next) => {
   
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        const ArrError = errors.array();
       return  res.send(ArrError) 

   }    



    const thumbnail = req.files['Thumbnail'][0].filename;
    const threepics = req.files['ThreePics'];
    const keywords = JSON.parse(req.body.keywords);
    const colors = JSON.parse(req.body.colors);
    const sizes = JSON.parse(req.body.sizes);

    const {productname, description, price, type} = req.body;
    const NewProduct = new Product({
        productname,
        description,
        price,
        type,
        thumbnail,
        threepics,
        keywords,
        colors,
        sizes
    })
        
        try{
            Product.findOne({productname: productname}, (err, result)=>{
                if(result){
                   return res.send({
                        message: "This Product's Name Already Exists"
                    })
                }
                
                const product = NewProduct.save();  
                res.send({
                    message: 'Product Uploaded'
                })
            })
        }catch(e){
            next(e)
        }
    
}

ProductController.RemoveProduct = async (req, res, next) => {
    const Nemo = await req.body.ProductNamee;
   
    try{
        Product.findOne({productname: Nemo}, (err, result)=>{
            if(result){
                
                Product.deleteOne({productname: Nemo}, (err, result)=>{
                    if(result){
                        res.send({
                            message: 'Product Deleted'
                        })
                        
                    }else{
                        res.send({
                            message: 'Failed to Delete This Product'
                        })
                    }
                  })
            }else{
                res.send({
                    message: 'There is no product with this name'
                })
            }
        })
    }catch(e){
        next(e)
    }
    
}

ProductController.FindProduct = (req, res, next) => {
    const ProductName = req.body.Find;
    Product.findOne({productname: ProductName}, (err, result)=>{
        if(result){
            res.send(result)
        }else{
            res.send({
                message: 'There is no product with this name'
            })
        }
    })
}

ProductController.ChangeProductImages = (req, res, next) => {
    const ProductName = req.body.Find;
    const thumbnail = req.files['Thumbnail'][0].filename;
    const threepics = req.files['ThreePics'];
    const NewImages = {
        thumbnail,
        threepics
    }
    Product.updateOne({productname: ProductName}, {$set: NewImages}, (err, result)=>{
        if(result){
            res.send({
                message: 'Images Changed Successfully'
            })
        }else{
            res.send({
                message: 'Can not Update your product'
            })
            
        }
    })
}

ProductController.ChangeInfos = (req, res, next) => {
    const keywords = JSON.parse(req.body.keywords);
    const sizes = JSON.parse(req.body.sizes);
    const colors = JSON.parse(req.body.colors);
    const productname = req.body.ProductName;
    const price = req.body.Price;
    const description = req.body.Description;
    const type = req.body.Type;
    const ProductName = req.body.ProductName;
    const newInfo = {
        productname,
        description,
        type,
        price,
        keywords,
        sizes,
        colors
    }
   
    Product.updateOne({productname: ProductName}, {$set: newInfo}, (err, result)=>{
        if(result){
            res.send({
                message: "Product Updated"
            })
        }else{
            res.send({
                message: "Can not Update your Product"
            })
        }
    })
}

ProductController.GetWomenShoes = (req, res, next)=>{
    Product.find({type: "Women's Shoes"}, (err, result)=>{
        if(result){
            const Arr = result.reverse();
            
            res.send(Arr.slice(0, 4))
        }else{
            res.send({
                message: 'No New Products'  
            })
        }
    })
}

ProductController.GetClothes = (req, res, next)=>{
    Product.find({type: "Clothes"}, (err, result)=>{
        if(result){
            const Arr = result.reverse();
            res.send(Arr.slice(0, 4))
        }else{
            res.send({
                message: 'No New Products'  
            })
        }
    })
}

ProductController.GetMenShoes = (req, res, next)=>{
    Product.find({type: "Men's Shoes"}, (err, result)=>{
        if(result){
            const Arr = result.reverse();
            res.send(Arr.slice(0, 4))
        }else{
            res.send({
                message: 'No New Products'  
            })
        }
    })
}

ProductController.GetAllWomenProd = (req, res, next)=>{
    Product.find({type: "Women's Shoes"}, (err, result)=>{
        if(result){
            const Arr = result.reverse();
            
            res.send(Arr)
        }else{
            res.send({
                message: 'No New Products'  
            })
        }
    })
}

ProductController.GetAllMenProd = (req, res, next)=>{
    Product.find({type: "Men's Shoes"}, (err, result)=>{
        if(result){
            const Arr = result.reverse();
            
            res.send(Arr)
        }else{
            res.send({
                message: 'No New Products'  
            })
        }
    })
}

ProductController.GetAllClothesProd = (req, res, next)=>{
    Product.find({type: "Clothes"}, (err, result)=>{
        if(result){
            const Arr = result.reverse();
            
            res.send(Arr)
        }else{
            res.send({
                message: 'No New Products'  
            })
        }
    })
}

ProductController.Comment = (req, res, next) => {
    const ProductName = req.body.Find;
    const CommentText = req.body.Comment;
    const Name = req.body.Name;
    const newComment = {
        CommentText,
        Name
    }
    

    Product.updateOne({productname: ProductName}, {$push: {comments: newComment}}, (err, result)=>{
        if(result){
            res.send({
                message: 'Comment Submited'
            })
        }else{
            res.send({
                message: 'Can Not Sumbit This Comment'
            })
        }
    })
}

ProductController.getComments = (req, res, next) => {
    const ProductName = req.body.Find;
    Product.findOne({productname: ProductName}, {_id: false, comments: true}, (err, result)=>{
        if(result){
            res.send(result.comments)
        }else{
            res.send({
                message: 'There is no product with this name'
            })
        }
    })
}


ProductController.DeleteComment = (req, res, next) => {
    const CommentTextReq = req.body.text;
    const ProductName = req.body.Find;
    Product.updateOne({productname: ProductName}, {$pull: {comments: {CommentText: CommentTextReq}}}, (err, result)=>{
        if(result){
            res.send({
                message: 'Comment Deleted'
            })
        }else{
            res.send({
                message: 'We Have a Problem'
            })
        }
    })
}   


ProductController.Search = (req, res, next) => {
    const Value = req.body.value
    Product.find({keywords: {$in : {Key: Value}}}, (err, result)=>{
        if(result){
            res.send(result)
        }else{
            res.send(err)
        }
    })
}

module.exports = ProductController;
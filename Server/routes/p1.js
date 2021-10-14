const express = require('express');
const prouter = express.Router();
const ProductController = require('../controller/product-controller');
const multer = require('multer');
const Product = require('../model/product-model');
const { body, validationResult, check } = require('express-validator');

const ProductStorage = multer.diskStorage({
    destination: (req, file, callback) =>{
        callback(null, '../Client/public/Images/Shoes');
    },
    filename: (req, file, callback) =>{
        callback(null, Date.now() + '-' + file.originalname.replace(/\s+/g, '-'));
    }
})  

const ProductUpload = multer({storage: ProductStorage});
const cpUpload = ProductUpload.fields([{name: 'Thumbnail', maxCount: 1}, {name: 'ThreePics', maxCount: 3}]);

prouter.post('/uploadthumbnail', cpUpload,

    body('productname', 'Product Name is Required').not().isEmpty(),
    body('description', 'Description is Required').not().isEmpty(),
    body('price', 'Price is Required').not().isEmpty(),
    body('type', 'Type is Required').not().isEmpty(),
    body('keywords', 'Keywords are Required').not().isEmpty(),
    body('colors', 'Colors are Required').not().isEmpty(),
    body('sizes', 'Sizes are Required').not().isEmpty()
,ProductController.UploadThumbnail)   

prouter.post('/removeproduct', ProductController.RemoveProduct)
prouter.post('/findproduct', ProductController.FindProduct)
prouter.post('/changeproductimages', cpUpload, ProductController.ChangeProductImages)
prouter.get('/getwomenshoes', ProductController.GetWomenShoes)
prouter.get('/getmenshoes', ProductController.GetMenShoes)
prouter.get('/getclothes', ProductController.GetClothes)
prouter.get('/getallwomenprod', ProductController.GetAllWomenProd)
prouter.get('/getallmenprod', ProductController.GetAllMenProd)
prouter.get('/getallclothesprod', ProductController.GetAllClothesProd)
prouter.post('/changeinfos', ProductController.ChangeInfos)
prouter.post('/comment', ProductController.Comment)
prouter.post('/getcomments', ProductController.getComments)
prouter.post('/deletecomment', ProductController.DeleteComment)
prouter.post('/search', ProductController.Search)
module.exports = prouter;
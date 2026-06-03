const express=require('express');
const ProductController = require('../../controller/productController');
const ProductImage = require('../../utils/fileUploads');

const router=express.Router();



router.post("/create/product",ProductImage.single('image'), ProductController.createProduct)
router.get('/product',ProductController.getProduct)
router.delete("/delete/product/:id",ProductController.deleteProduct)
router.post("/update/product/:id",ProductController.updateProduct)
router.get("/search", ProductController.searchProduct)



module.exports=router;  
const express=require('express');
const ProductController = require('../../controller/productController');

const router=express.Router();



router.post("/create/product", ProductController.createProduct)
router.get('/product',ProductController.getProduct)
router.delete("/delete/product/:id",ProductController.deleteProduct)
router.post("/update/product/:id",ProductController.updateProduct)



module.exports=router;  
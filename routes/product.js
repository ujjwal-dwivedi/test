const express=require('express');
const router=express.Router();
const productController=require('../Controller/product');


router
.get('/',productController.getAllProducts)
.get('/:id',productController.getProductByID)
.post('/',productController.createProduct)
.put('/:id',productController.replaceProduct)
.patch('/:id',productController.updateProduct)
.delete('/:id',productController.deleteProduct)

exports.router=router;


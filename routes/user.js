const express=require('express');
const router=express.Router();
const userController=require('../Controller/user');


router
.get('/',userController.getAllProducts)
.get('/:id',userController.getProductByID)
.post('/',userController.createProduct)
.put('/:id',userController.replaceProduct)
.patch('/:id',userController.updateProduct)
.delete('/:id',userController.deleteProduct)

exports.router=router;


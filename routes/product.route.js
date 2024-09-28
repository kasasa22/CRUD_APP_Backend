const express  = require('express')
const Product = require("../models/product.model.js")
const router = express.Router();
const {getProducts,getProduct,createProduct, deleteProduct, updateProduct} = require('../controllers/product.controller.js');



router.get('/', getProducts)

router.get('/:id', getProduct)

router.post('/', createProduct)

router.post('/:id', deleteProduct)

router.put('/:id',updateProduct)





module.exports = router

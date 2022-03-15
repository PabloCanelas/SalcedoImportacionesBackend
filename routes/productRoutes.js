const express = require('express')
const router = express.Router()
const {
    getProducts, 
    setProduct, 
    updateProduct, 
    deleteProduct
} = require('../controller/productController')

router.get('/', getProducts)
router.post('/', setProduct)
router.put('/', updateProduct)
router.delete('/:id', deleteProduct)

module.exports = router
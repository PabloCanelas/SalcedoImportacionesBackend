const asyncHandler = require('express-async-handler')
const Product = require('../models/productModel')

// @desc Get goals
// @route GET /product
// @access Private
const getProducts = asyncHandler(async(req, res) => {
    const products = await Product.find()
    res.status(200).json(products)
})

// @desc Get goals
// @route POST /product
// @access Private
const setProduct = asyncHandler(async(req, res) => {
    //CASOS A CONSIDERAR: CODIGO UNICO, VALORES REQUIRED
    if(!req.body.codigo || !req.body.descripcion){
        res.status(400)
        throw new Error('Please add code and description field')
    }
    const product = await Product.create({ 
        Codigo: req.body.codigo,
        Cantidad: req.body.cantidad,
        Unidad: req.body.unidad,
        Descripcion: req.body.descripcion    
    })

    res.status(200).json(product)
})

// @desc Get goals
// @route PUT /product
// @access Private
const updateProduct = asyncHandler(async(req, res) => {
    // const product = await Product.findOne({code:req.body.codigo})
    // if(!product){
    //     res.status(400)
    //     throw new Error('Product not found')
    // }
    
    res.status(200).json({message:"updated"})

})

// @desc Get goals
// @route DELETE /product
// @access Private
const deleteProduct = asyncHandler(async(req, res) => {
    res.status(200).json({message:"delete"})
})

module.exports = {
    getProducts,
    setProduct,
    updateProduct,
    deleteProduct
}
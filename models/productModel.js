const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
    {
        Codigo: String,
        Cantidad: String,
        Unidad: String,
        Descripcion: String
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("Product", productSchema, 'Productos')
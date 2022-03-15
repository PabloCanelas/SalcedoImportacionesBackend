const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const port = process.env.PORT

connectDB()
 
const app = express()
app.use(express.json());


app.use('/product', require('./routes/productRoutes'))

app.listen(port, () => console.log("Server running on port "+port))
 

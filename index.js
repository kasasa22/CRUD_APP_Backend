const express = require('express')
const mongoose = require ('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js');
const app = express()


//middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//routes
app.use("/api/products", productRoute)



mongoose.connect('mongodb+srv://kasasatrevor25:QndSnQjgqIqBMsz4@backend.djnep.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Backend')
.then(()=>{
    console.log('connected to database')
    app.listen(3000,()=>{
        console.log("Server is running on port 3000")
    })

})
.catch(()=>{
    console.log('connection failed')
})


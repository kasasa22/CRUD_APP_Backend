const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required: [true, "please enter product name"]
        },

        quantity:{
            type: Number,
            required: [true, "please enter quatity"],
            default: 0
        },

        price:{
            type: Number,
            require: true,
            default: 0

        },

        image: {
            type: String,
            required: false
        }
    },

    {
        Timestamp: true
    }
)

const product = mongoose.model("Product", productSchema);

module.exports= product;

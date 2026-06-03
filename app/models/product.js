const mongoose = require('mongoose')


const schema = mongoose.Schema

const ProductSchema = new mongoose.Schema(
    {
        productName:
        {
            type:String,
            required:true
        },
        productPrice:
        {
            type: Number,
            required: true
        },
        image:
        {
            type: String,
            default:"image"

        },
        desc:
        {
            type: String,
            required:true
        }
    }
)
const ProductModel = mongoose.model('product',ProductSchema)
module.exports=ProductModel


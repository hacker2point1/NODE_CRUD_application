const ProductModel = require("../models/product");
const Product = require("../models/product");

class ProductController {
  //create the product
  async createProduct(req, res) {
    try {
      const { productName, productPrice, desc } = req.body;

      const product = new Product({
        productName,
        productPrice,
        desc,
      });
      // if(!productName){
      //   return res.status(400).json({
      //     status: false,
      //     message: "Product name required" 
      //   })
      // }
      //validation for the required fields [dynamic]
      const requiredFields = ["productName", "productPrice", "desc"]
      for(let field of requiredFields){
        if(!req.body[field]){
          return res.status(400).json({
            status: false,
            message: `${field} is required`
          })
        }
      }
      const data = await product.save();
      return res.status(201).json({
        status: true,
        message: "Product created successfully",
        data: data,
      });
    } catch (err) {
      return res.status(500).json({
        status: false,
        message: "something went wrong",
        error: err,
      });
    }
  }
  //get the product
  async getProduct(req, res) {
    try {
      const products = await ProductModel.find();
      return res.status(200).json({
        status: true,
        total: products.length,
        message: "Product fetched successfully",
        data: products,
      });
    } catch (err) {
      return res.status(500).json({
        status: false,
        message: "something went wrong",
        error: err,
      });
    }
  }
  //update the product
  async updateProduct(req,res){
     
    try{
      const id = req.params.id

      const updateProduct =await ProductModel.findByIdAndUpdate(
        id,
        req.body,
        {
          returnDocument: "after",
          runValidators: true
        }
      )
      if(!updateProduct){
        return res.status(400).json({
          status: false,
          message: "Product not found"
        })
      }
      return res.status(200).json({
        status: true,
        message: "Product updated succesfully",
        data: updateProduct
      })

    }
    catch(err){
      return res.status(500).json({
        status: false,
        message: "Something went wrong",
        error: err
      })
    }
  }
  //delete product
  async deleteProduct(req,res){
    try{

      //the product will be deleted with the id
      const id = req.params.id
      const deleteProduct = await ProductModel.findByIdAndDelete(id)

      if(!deleteProduct){
        return res.status(400).json({
          status: false,
          message:"Product not found"
        })
      }
      return res.status(200).json({
        status: true,
        message: "Product deleted succeessfully",
        data: deleteProduct
        
      })

    }
    catch(err){
      return res.status(500).json({
        status: false,
        message:"something went wrong",
        error: err
      })
    }
  }
}

module.exports = new ProductController();

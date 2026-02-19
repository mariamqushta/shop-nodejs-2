import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  header: String,
  type: String,
  img: [String],
  cost: Number,
  Discount:Number,

}, {
  timestamps: true,
  collection: "product1",
});

const Product = mongoose.model("Product1", productSchema);

export default Product;
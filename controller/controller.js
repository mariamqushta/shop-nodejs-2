import expressAsyncHandler from "express-async-handler";
import Product from "../models/product-model.js";






export const product = expressAsyncHandler(async (req, res) => {
    const products = await Product.find();
    res.json(products);
})

export const createProduct = async (req, res) => {
  try {
    const { header, type, img, cost, Discount } = req.body;

    const product = await Product.create({
      header,
      type,
      img: Array.isArray(img) ? img : [img],   // <– convert string to array
      cost: Number(cost),
      Discount: Number(Discount),
    
    });

    res.status(201).json({
      message: "Product created successfully",
      product
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all products
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }

};
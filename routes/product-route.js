import express from "express";
import { validate } from "../middleware/validate.js";
import { auth } from "../middleware/auth.js";
import { productValidation } from "../services/auth-validation.js";

import { createProduct, getAllProducts } from "../controller/controller.js";

const productRouter = express.Router();

// Admin add product
productRouter.post(
  "/add",         // check token     // check role
  validate(productValidation),
  createProduct
);


// Get all products
productRouter.get("/", getAllProducts);

export default productRouter;
import mongoose from "mongoose";

const productModel = new mongoose.Schema({
  name: String,
  price: String,
  color: String,
  company: String,
  category: String,
});

export const product = mongoose.models.products || mongoose.model("products", productModel);

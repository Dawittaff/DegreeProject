import express from 'express';
import Product from '../models/productModel.js';
import data from '../data.js';
import User from '../models/userModel.js';
const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  // return all records inside Product model
  await Product.deleteMany({});
  // insert an array of products to the Prodcut model in DB & return createdProducts
  const createdProducts = await Product.insertMany(data.products);
  await User.deleteMany({});
  // insert an array of products to the Prodcut model in DB & return createdProducts
  const createdUsers = await User.insertMany(data.users);
  res.send({ createdProducts, createdUsers });
});
export default seedRouter;

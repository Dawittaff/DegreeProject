import express from 'express';
import data from './data.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seedRouter from './Routes/seedRoutes.js';
import productRouter from './Routes/productRoutes.js';
dotenv.config();
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to DB');
  })
  .catch((err) => {
    console.log(err.message);
  });
//function to retuen express app
const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use('/api/seed', seedRouter);
// test
// app.get('/api/products', (req, res) => {
//   res.send(data.products);
// });
app.use('/api/products', productRouter);

//defining port that responds to the backend
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});

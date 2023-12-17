import express from 'express';
import data from './data.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seedRouter from './Routes/seedRoutes.js';
import productRouter from './Routes/productRoutes.js';
import userRouter from './Routes/userRoutes.js';
import orderRouter from './Routes/orderRoutes.js';
import serviceRouter from './Routes/serviceRoutes.js';

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
// form data in the POST request  will be converted to a JSON object inside req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/seed', seedRouter);
// test

app.get('/api/keys/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
});
app.use('/api/products', productRouter);
app.use('/api/services', serviceRouter);
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);

// error handler for express
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});
//defining port that responds to the backend
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});

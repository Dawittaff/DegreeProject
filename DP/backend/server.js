import express from 'express';
import data from './data.js';

//function to retuen express app
const app = express();

app.get('/api/products', (req, res) => {
  res.send(data.products);
});

// get the details to the product details screen based on the slug
app.get('/api/products/slug/:slug', (req, res) => {
  const product = data.products.find((x) => x.slug === req.params.slug);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
  // res.send(data.products);
});

app.get('/api/products/:id', (req, res) => {
  const product = data.products.find((x) => x._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
  // res.send(data.products);
});
//defining port that responds to the backend
const port = process.env.PORT || 5000;
//get server ready to respond to the request from frontend
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});

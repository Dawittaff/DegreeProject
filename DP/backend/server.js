import express from 'express';
import data from './data.js';

//function to retuen express app
const app = express();

app.get('/api/products', (req, res) => {
  res.send(data.products);
});

//defining port that responds to the backend
const port = process.env.PORT || 5000;
//get server ready to respond to the request from frontend
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});

import express from 'express';

import expressAsyncHandler from 'express-async-handler';
import Service from '../models/serviceModel.js';

const serviceRouter = express.Router();

serviceRouter.get('/', async (req, res) => {
  const services = await Service.find();
  res.send(services);
});
serviceRouter.get('/slug/:slug', async (req, res) => {
  const service = await Service.findOne({ slug: req.params.slug });
  try {
    if (service) {
      res.send(service);
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  } catch (err) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

// serviceRouter.get('/:id', async (req, res) => {
//   const service = await Service.findById(req.params.id);
//   if (service) {
//     res.send(service);
//   } else {
//     res.status(404).send({ message: 'Service Not Found' });
//   }
//   // res.send(data.products);
// });
// productRouter.get(
//   '/categories',
//   expressAsyncHandler(async (req, res) => {
//     const categories = await Product.find().distinct('category');
//     res.send(categories);
//   })
// );
// get the details to the product details screen based on the slug
// !!!
// serviceRouter.get('/slug/:slug', async (req, res) => {
//   const service = await Service.findOne({ slug: req.params.slug });
//   if (service) {
//     res.send(service);
//     // res.send(data.products);
//   } else {
//     res.status(404).send({ message: 'Product Not Found' });
//   }
// });

// serviceRouter.get('/:id', async (req, res) => {
//   const service = await Service.findById(req.params.id);
//   if (service) {
//     res.send(service);
//   } else {
//     res.status(404).send({ message: 'Service Not Found' });
//   }
//   // res.send(data.products);
// });
export default serviceRouter;

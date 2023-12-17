import mongoose from 'mongoose';
const serviceSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  slug: { type: String, required: true, unique: true },
  image: { type: String, required: false },
  description: { type: String, required: true },
  category: { type: String, required: false },
  price: { type: Number, required: false },
});
const Service = mongoose.model('Service ', serviceSchema);
export default Service;

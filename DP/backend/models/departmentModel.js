import mongoose from 'mongoose';

const DepartmentSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },

  service: {
    type: String,
    slug: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    required: false,
  },
});

const Department = mongoose.model('Department', DepartmentSchema);
export default Department;

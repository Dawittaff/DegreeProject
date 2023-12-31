import mongoose from 'mongoose';
const DiseaseSchema = Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Department',
    required: true,
  },
});

const Disease = mongoose.model('Disease', DiseaseSchema);
export default Disease;

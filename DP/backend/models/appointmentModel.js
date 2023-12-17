import mongoose from 'mongoose';
const appointmentSchema = Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Department',
    required: true,
  },
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  disease: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Disease',
    default: null,
  },
  appointmentDate: {
    type: Date,
    required: true,
  },
  appointmentStatus: {
    type: String,
    enum: ['pending', 'open', 'rejected', 'cancelled', 'completed'],
    required: true,
  },
  slug: { type: String, required: true },
});

const Appointment = mongoose.model('Appointment', appointmentSchema);
export default Appointment;

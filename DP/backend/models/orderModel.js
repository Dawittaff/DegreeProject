import mongoose from 'mongoose';
const orderSchema = new mongoose.Schema(
  {
    orderItems: [
      // save items information
      {
        slug: { type: String, required: true },
        name: { type: String, required: true },
        quantity: { type: Number, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
          required: true,
        },
      },
    ],

    shippingAddress:
      // save items information
      {
        fullName: { type: String, required: true },
        address: { type: String, required: true },
        city: { type: String, required: true },
        postalCode: { type: String, required: true },
        country: { type: String, required: true },
      },

    paymentMethod: { type: String, required: true },

    paymentResult: {
      id: String,
      status: String,
      update_time: String,
      email_address: String,
    },

    itemsPrice: { type: Number, required: true },
    shippingPrice: { type: Number, required: true },
    TaxPrice: { type: Number, required: true },
    itemsPrice: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    isDelivered: { type: Boolean, default: false },
    deliveredAt: { type: Date },
  },
  {
    timestamps: true,
  }
);
const Order = mongoose.model('Order', orderSchema);
export default Order;

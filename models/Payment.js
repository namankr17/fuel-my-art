//Mongoose model to store payment information
import mongoose from "mongoose";
const paymentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
    amount: {
        type: Number,
        required: true,
    },
    message: {
        type: String,
        required: false,
        maxlength: 50,
    },
    orderId: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
}, { timestamps: true });

export default mongoose.models.Payment || mongoose.model("Payment", paymentSchema);
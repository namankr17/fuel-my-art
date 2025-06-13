// Model in mongoose for User
import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
  paymentCredentials: {
    type: String,
    required: false,
  },
  profilePicUrl: {
    type: String,
    required: false,
  },
  coverPicUrl: {
    type: String,
    required: false,
  },
}, { timestamps: true });
export default mongoose.models.User || mongoose.model("User", userSchema);
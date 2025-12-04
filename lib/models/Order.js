import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 10,
    },

    room: {
      type: String,
      required: true,
    },

    product: {
      type: String,
      required: true,
    },

    qty: {
      type: Number,
      required: true,
      min: 1,
    },

    status: {
      type: String,
      default: "Pending", // Pending | Preparing | Completed
    },
  },
  { timestamps: true }
);

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);

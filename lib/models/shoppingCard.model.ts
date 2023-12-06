import mongoose from "mongoose";

const ShoppingCardSchema = new mongoose.Schema({
  images: {
    type: [String],
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    index: true, // Add an index for better performance on queries involving category
  },
  price: {
    type: String, // Change to Number for the price
    required: true,
    // validate: {
    //   validator: (value: number) => !isNaN(value), // Additional validation for numeric value
    //   message: "Price must be a valid number",
    // },
  },
  isOutOfStock: {
    type: String, // Change to Boolean for a binary state
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: false, // Set required to false since you're providing a default value
  },
});

const ShoppingCard = mongoose.models.ShoppingCard || mongoose.model('ShoppingCard', ShoppingCardSchema);

export default ShoppingCard;

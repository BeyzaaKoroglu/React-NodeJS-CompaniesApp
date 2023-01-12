const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
  },
  amount: {
    type: Number,
    required: true,
  },
  amountUnit: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company',
    required: true,
  },
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;

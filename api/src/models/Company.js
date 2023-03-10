const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  phone: {
    type: String,
  },
  country: {
    type: String,
  },
  website: {
    type: String,
    unique: true,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
    },
  ],
});

const Company = mongoose.model('Company', CompanySchema);

module.exports = Company;

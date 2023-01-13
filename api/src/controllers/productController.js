const Product = require('../models/Product');
const Company = require('../models/Company');

exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    const company = await Company.findById(product.company);
    await company.products.push(product._id);
    await company.save();

    res.status(201).json({
      status: 'success',
      product,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().populate("company");
    res.status(200).json({
      status: 'success',
      products,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findOne({ _id: req.params.id });

    res.status(200).json({
      status: 'success',
      product,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findOne({ _id: req.params.id });
    product.name = req.body.name;
    product.category = req.body.category;
    product.amount = req.body.amount;
    product.amountUnit = req.body.amountUnit;
    product.save();

    res.status(200).json({
      status: 'success',
      product,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};

exports.deleteProduct = async (req, res) => {
  const product = await Product.findOneAndRemove({ _id: req.params.id });
  const company = await Company.findById(product.company);
  company.products.pull(product._id);
  await company.save();

  try {
    res.status(200).json({
      status: 'success',
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};

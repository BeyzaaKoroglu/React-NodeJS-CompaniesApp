const Company = require('../models/Company');

exports.createCompany = async (req, res) => {
  try {
    const company = await Company.create(req.body);
    res.status(201).json({
      status: 'success',
      company,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};

exports.getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.find();
    res.status(200).json({
      status: 'success',
      companies,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};

exports.getCompanyById = async (req, res) => {
  try {
    const company = await Company.findOne({ _id: req.params.id });

    res.status(200).json({
      status: 'success',
      company,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};

exports.updateCompany = async (req, res) => {
  try {
    const company = await Company.findOne({ _id: req.params.id });
    company.name = req.body.name;
    company.phone = req.body.phone;
    company.country = req.body.country;
    company.website = req.body.website;
    company.save();

    res.status(200).json({
      status: 'success',
      company,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};

exports.deleteCompany = async (req, res) => {
  await Company.findOneAndRemove({ _id: req.params.id });

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

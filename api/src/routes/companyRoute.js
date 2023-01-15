const express = require('express');
const companyController = require('../controllers/companyController');

const router = express.Router();

router.route('/').get(companyController.getAllCompanies);
router.route('/').post(companyController.createCompany);
router.route('/:id').get(companyController.getCompanyById);
router.route('/:id').put(companyController.updateCompany);
router.route('/:id').delete(companyController.deleteCompany);

module.exports = router;

const express = require('express');
const companyController = require('../controllers/companyController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.route('/').get(authMiddleware, companyController.getAllCompanies);
router.route('/').post(authMiddleware, companyController.createCompany);
router.route('/:id').get(authMiddleware, companyController.getCompanyById);
router.route('/:id').put(authMiddleware, companyController.updateCompany);
router.route('/:id').delete(authMiddleware, companyController.deleteCompany);

module.exports = router;

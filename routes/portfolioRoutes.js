const express = require('express');
const { createPortfolio, getAllPortfolios, updatePortfolio, deletePortfolio } = require('../controllers/portfolioController');
const protect = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', protect, createPortfolio);
router.get('/', protect, getAllPortfolios);
router.put('/:id', protect, updatePortfolio);
router.delete('/:id', protect, deletePortfolio);

module.exports = router;

const Portfolio = require('../models/Portfolio');

// Create Portfolio
exports.createPortfolio = async (req, res) => {
  try {
    const { title, description, img, codelink, livelink } = req.body;
    const portfolio = await Portfolio.create({ title, description, img, codelink, livelink, user: req.user._id });
    res.status(201).json({ message: "Portfolio created", portfolio });
  } catch (error) {
    res.status(400).json({ message: "Error creating portfolio", error });
  }
};

// Get All Portfolios
exports.getAllPortfolios = async (req, res) => {
  const portfolios = await Portfolio.find({ user: req.user._id });
  res.json(portfolios);
};

// Update Portfolio
exports.updatePortfolio = async (req, res) => {
  const portfolio = await Portfolio.findById(req.params.id);
  if (!portfolio || portfolio.user.toString() !== req.user._id.toString()) {
    return res.status(403).json({ message: "Not authorized" });
  }
  await Portfolio.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json({ message: "Portfolio updated" });
};

// Delete Portfolio
exports.deletePortfolio = async (req, res) => {
  const portfolio = await Portfolio.findById(req.params.id);
  if (!portfolio || portfolio.user.toString() !== req.user._id.toString()) {
    return res.status(403).json({ message: "Not authorized" });
  }
  await portfolio.remove();
  res.json({ message: "Portfolio deleted" });
};

const express = require('express');
const router = express.Router();
const Review = require('../models/Review');
const { authenticate } = require('../middlewares/auth');

// GET /reviews
router.get('/', async (req, res) => {
  const { bookId } = req.query;
  try {
    const reviews = await Review.find({ bookId })
      .populate('userId', 'username')  
      .sort({ createdAt: -1 });        
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: 'Failed to load reviews' });
  }
});

// POST /reviews
router.post('/', authenticate, async (req, res) => {
  try {
    const review = await Review.create({
      ...req.body,
      userId: req.user.id
    });
    const populated = await Review.findById(review._id).populate('userId', 'username'); 
    res.status(201).json(populated);
  } catch (err) {
    res.status(400).json({ message: 'Failed to submit review' });
  }
});

module.exports = router;

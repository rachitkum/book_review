const express = require('express');
const router = express.Router();
const Book = require('../models/Book');
const { authenticate, adminOnly } = require('../middlewares/auth');

// GET /books - paginated
router.get('/', async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const books = await Book.find().skip((page - 1) * limit).limit(Number(limit));
  res.json(books);
});

// GET /books/:id
router.get('/:id', async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book) return res.status(404).json({ message: 'Book not found' });
  res.json(book);
});

// POST /books (admin only)
router.post('/', authenticate, adminOnly, async (req, res) => {
  const book = await Book.create(req.body);
  res.status(201).json(book);
});

module.exports = router;

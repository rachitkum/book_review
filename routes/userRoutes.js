const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const { authenticate } = require('../middlewares/auth');

// POST /users/register
// router.post('/register', async (req, res) => {
//   const user = await User.create(req.body);
//   res.status(201).json(user);
// });
router.post('/register', async (req, res) => {
  try {
    const user = await User.create(req.body);

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.status(201).json({ token }); // Send token back just like login
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


// POST /users/login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password)))
    return res.status(401).json({ message: 'Invalid credentials' });

  const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });

  res.json({ token });
});

// GET /users/:id
router.get('/:id', authenticate, async (req, res) => {
  if (req.user.id !== req.params.id) return res.status(403).json({ message: 'Forbidden' });
  const user = await User.findById(req.params.id).select('-password');
  res.json(user);
});

// PUT /users/:id
router.put('/:id', authenticate, async (req, res) => {
  if (req.user.id !== req.params.id)
    return res.status(403).json({ message: 'Forbidden' });

  if (req.body.password) {
    req.body.password = await bcrypt.hash(req.body.password, 10); // 👈 hash manually
  }

  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  }).select('-password');

  res.json(user);
});


module.exports = router;

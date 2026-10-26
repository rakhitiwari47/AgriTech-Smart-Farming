const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const auth = require('../middleware/auth');
const sign = user => jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
router.post('/register', async (req, res) => {
  const { name, email, password, preferredLanguage } = req.body;
  if (!name || !email || !password) return res.status(400).json({ message: 'Name, email and password are required.' });
  if (password.length < 8) return res.status(400).json({ message: 'Password must be at least 8 characters.' });
  const user = await User.create({ name, email, password: await bcrypt.hash(password, 12), preferredLanguage });
  res.status(201).json({ token: sign(user), user: { id: user._id, name: user.name, email: user.email, role: user.role } });
});
router.post('/login', async (req, res) => {
  const user = await User.findOne({ email: String(req.body.email || '').toLowerCase() });
  if (!user || !(await bcrypt.compare(req.body.password || '', user.password)))
    return res.status(401).json({ message: 'Invalid email or password.' });
  res.json({ token: sign(user), user: { id: user._id, name: user.name, email: user.email, role: user.role } });
});
router.get('/me', auth, (req, res) => res.json({ user: req.user }));
module.exports = router;

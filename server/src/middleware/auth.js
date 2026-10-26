const jwt = require('jsonwebtoken');
const User = require('../models/User');
module.exports = async function auth(req, res, next) {
  const token = (req.headers.authorization || '').startsWith('Bearer ')
    ? req.headers.authorization.slice(7) : null;
  if (!token) return res.status(401).json({ message: 'Please log in to continue.' });
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(payload.id).select('-password');
    if (!req.user) return res.status(401).json({ message: 'Account not found.' });
    next();
  } catch (_err) { return res.status(401).json({ message: 'Session expired or token is invalid.' }); }
};

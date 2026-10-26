const router = require('express').Router();
const Farm = require('../models/Farm');
const auth = require('../middleware/auth');
router.use(auth);
router.get('/', async (req, res) => res.json(await Farm.find({ owner: req.user._id }).sort({ createdAt: -1 })));
router.post('/', async (req, res) => {
  const { name, location, areaAcres, soilType, irrigation } = req.body;
  if (!name || !location) return res.status(400).json({ message: 'Farm name and location are required.' });
  res.status(201).json(await Farm.create({ owner: req.user._id, name, location, areaAcres, soilType, irrigation }));
});
router.delete('/:id', async (req, res) => {
  const farm = await Farm.findOneAndDelete({ _id: req.params.id, owner: req.user._id });
  if (!farm) return res.status(404).json({ message: 'Farm not found.' });
  res.json({ message: 'Farm deleted.' });
});
module.exports = router;

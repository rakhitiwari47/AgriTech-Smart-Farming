const router = require('express').Router();
const Crop = require('../models/Crop');
const Farm = require('../models/Farm');
const auth = require('../middleware/auth');
router.use(auth);
router.get('/', async (req, res) => res.json(await Crop.find({ owner: req.user._id }).populate('farm', 'name location').sort({ createdAt: -1 })));
router.post('/', async (req, res) => {
  const { farm, name, season, sowingDate, expectedHarvest, status, notes } = req.body;
  if (!farm || !name) return res.status(400).json({ message: 'Select a farm and enter a crop name.' });
  const ownedFarm = await Farm.findOne({ _id: farm, owner: req.user._id });
  if (!ownedFarm) return res.status(400).json({ message: 'Farm not found in your account.' });
  res.status(201).json(await Crop.create({ owner: req.user._id, farm, name, season, sowingDate, expectedHarvest, status, notes }));
});
router.patch('/:id', async (req, res) => {
  const allowed = ['name','season','sowingDate','expectedHarvest','status','notes'];
  const update = {};
  allowed.forEach(k => { if (req.body[k] !== undefined) update[k] = req.body[k]; });
  const crop = await Crop.findOneAndUpdate({ _id: req.params.id, owner: req.user._id }, update, { new: true, runValidators: true });
  if (!crop) return res.status(404).json({ message: 'Crop not found.' });
  res.json(crop);
});
router.delete('/:id', async (req, res) => {
  const crop = await Crop.findOneAndDelete({ _id: req.params.id, owner: req.user._id });
  if (!crop) return res.status(404).json({ message: 'Crop not found.' });
  res.json({ message: 'Crop deleted.' });
});
module.exports = router;

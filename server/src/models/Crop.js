const mongoose = require('mongoose');
const cropSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  farm: { type: mongoose.Schema.Types.ObjectId, ref: 'Farm', required: true },
  name: { type: String, required: true, trim: true },
  season: { type: String, default: 'Not specified' },
  sowingDate: { type: Date },
  expectedHarvest: { type: Date },
  status: { type: String, enum: ['Planned', 'Growing', 'Ready to harvest', 'Harvested'], default: 'Growing' },
  notes: { type: String, default: '' }
}, { timestamps: true });
module.exports = mongoose.model('Crop', cropSchema);

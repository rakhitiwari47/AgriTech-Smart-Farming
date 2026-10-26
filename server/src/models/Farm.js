const mongoose = require('mongoose');
const farmSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  name: { type: String, required: true, trim: true },
  location: { type: String, required: true, trim: true },
  areaAcres: { type: Number, min: 0, default: 0 },
  soilType: { type: String, default: 'Not specified' },
  irrigation: { type: String, default: 'Not specified' }
}, { timestamps: true });
module.exports = mongoose.model('Farm', farmSchema);

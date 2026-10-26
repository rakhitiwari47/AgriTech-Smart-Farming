const router = require('express').Router();
const auth = require('../middleware/auth');
router.get('/', auth, (_req, res) => res.json([
  { id: 1, type: 'Pest watch', title: 'Inspect leaves regularly', detail: 'Check both sides of leaves for unusual spots, holes, eggs or insects. Confirm with a local agriculture expert before treatment.', severity: 'advisory' },
  { id: 2, type: 'Weather safety', title: 'Review the local forecast', detail: 'Check official local forecasts before irrigation, spraying or harvesting.', severity: 'advisory' },
  { id: 3, type: 'Soil health', title: 'Use a soil test for decisions', detail: 'Record a soil-test result before changing fertilizer or soil amendments.', severity: 'info' }
]));
module.exports = router;

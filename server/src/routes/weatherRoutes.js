const router = require('express').Router();
router.get('/', async (req, res) => {
  const city = String(req.query.city || 'Indore').trim();
  if (!process.env.OPENWEATHER_API_KEY) return res.json({
    city, configured: false, message: 'Add OPENWEATHER_API_KEY to server/.env to load live weather.',
    tip: 'Always verify local forecasts before making farm decisions.'
  });
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${process.env.OPENWEATHER_API_KEY}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    if (!response.ok) return res.status(response.status).json({ message: data.message || 'Weather service error.' });
    res.json({ city: data.name, configured: true, temperatureC: data.main.temp, humidity: data.main.humidity,
      description: data.weather?.[0]?.description || 'Not available', windSpeed: data.wind?.speed });
  } catch (_err) { res.status(502).json({ message: 'Could not reach weather service.' }); }
});
module.exports = router;

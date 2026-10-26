# Features, API and Testing Checklist

## Features implemented
- Responsive farmer dashboard
- English and Hindi interface labels
- Register/login with JWT
- Password hashing with bcryptjs
- Farmer-owned farm records (create/list/delete)
- Crop tracking (create/list/update status/delete)
- Weather lookup endpoint with optional OpenWeatherMap key
- General pest, weather and soil-health reminders
- MongoDB/Mongoose data models
- API health endpoint

## API endpoints
| Method | Endpoint | Auth | Purpose |
|---|---|---|---|
| GET | `/api/health` | No | API health check |
| POST | `/api/auth/register` | No | Create farmer account |
| POST | `/api/auth/login` | No | Login |
| GET | `/api/auth/me` | Yes | Current account |
| GET, POST | `/api/farms` | Yes | List/create own farms |
| DELETE | `/api/farms/:id` | Yes | Delete own farm |
| GET, POST | `/api/crops` | Yes | List/create own crops |
| PATCH, DELETE | `/api/crops/:id` | Yes | Update/delete own crop |
| GET | `/api/weather?city=Indore` | No | Weather lookup/config message |
| GET | `/api/alerts` | Yes | General reminders |

## Manual testing
1. Start MongoDB and backend. Open `http://localhost:5000/api/health`; expect JSON status `ok`.
2. Register a user with a valid name, email and password of 8+ characters.
3. Log out and log back in with the same credentials.
4. Add a farm with a name and location; refresh and confirm it remains.
5. Add a crop linked to that farm; change its status; refresh and confirm status persists.
6. Confirm one account cannot access another account's farm/crop IDs.
7. Open weather lookup. Without API key, expect configuration guidance. With a valid key, expect current weather data.
8. Test layout on mobile and desktop widths.
9. In Postman, test missing fields, invalid login, and requests without bearer token.

## Known limitations / honest demo notes
- Weather is live only after configuring a provider API key.
- Soil analysis is a record field, not an AI laboratory diagnosis. Real soil analysis requires measured values or a trusted lab/provider integration.
- Pest alerts are general reminders, not automatically generated disease predictions.
- Resource marketplace, orders, expert consultation, community forum, and a full admin dashboard are future extensions, not implemented in this starter.
- Hindi translation covers the main interface labels; full localisation should include every message and content item.

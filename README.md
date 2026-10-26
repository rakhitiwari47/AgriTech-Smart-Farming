# AgriTech — Smart Farming Management System

A student-friendly MERN-stack starter project for **AgriTech: Empowering farmers through digital technology**. It includes a responsive React dashboard, Express REST API, MongoDB models, JWT authentication, farmer/admin roles, farm and crop CRUD, weather endpoint, pest alerts, and project documentation.

## Demo and GitHub links
- **Live Demo:** Add your deployed URL here after deploying the frontend.
- **GitHub:** Add your repository URL here after uploading this project.

Do not submit placeholder URLs as live links. The application runs locally until you deploy it.

## Tech stack
- Frontend: React, React Router, Axios, Bootstrap
- Backend: Node.js, Express.js, MongoDB/Mongoose
- Authentication: JWT, bcryptjs
- Optional weather integration: OpenWeatherMap API key

## Requirements
- Node.js 18+ recommended
- npm
- MongoDB local installation or MongoDB Atlas connection string

## Run locally

### 1. Configure the backend
```bash
cd server
copy .env.example .env
```
On macOS/Linux use `cp .env.example .env`. Edit `.env` and set `MONGO_URI` and a long random `JWT_SECRET`.

### 2. Install and start backend
```bash
npm install
npm run dev
```
Backend runs at `http://localhost:5000`.

### 3. Install and start frontend (new terminal)
```bash
cd client
npm install
npm start
```
Frontend runs at `http://localhost:3000`.

## Demo login
Register a new account from the app. The first registered account is a farmer. To create an admin, register normally, then change that user's `role` to `admin` in MongoDB. Never expose admin registration publicly.

## Weather
Set `OPENWEATHER_API_KEY` in `server/.env` to enable live weather. Without a key, the app returns a helpful configuration message.

## Main API routes
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/auth/me` (JWT required)
- `GET/POST /api/farms`
- `GET/POST /api/crops`
- `GET /api/weather?city=Indore`
- `GET /api/alerts`

## Before submission
- Replace the demo/GitHub placeholders with real links.
- Add your own screenshots and demo video.
- Test registration, login, adding farms/crops, and API routes.
- Do not commit `.env`, passwords, or API keys.

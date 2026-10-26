# Software Requirements Specification (SRS)

## 1. Introduction
### 1.1 Purpose
AgriTech is a web-based smart farming management application that helps farmers organise farm and crop records, check weather information, and view practical agriculture reminders.
### 1.2 Scope
The system provides account registration/login, farm profile management, crop tracking, weather lookup, and general advisory reminders. The application uses React for the user interface, Express/Node.js for REST APIs, and MongoDB for persistent storage.
### 1.3 Intended users
- Farmer: manages their own farms and crop records.
- Administrator: reserved role for future content and system management.

## 2. Overall Description
### 2.1 Product perspective
The product follows a client-server architecture. The React client calls the Express REST API. Mongoose persists user, farm and crop data in MongoDB. Weather information is obtained from an external provider when configured.
### 2.2 User classes
- Farmer with basic digital literacy and mobile/desktop access.
- Project administrator responsible for configuration and data oversight.
### 2.3 Operating environment
Node.js 18+, npm, MongoDB local or Atlas, modern web browser, and optional OpenWeatherMap API key.
### 2.4 Constraints
Live weather requires a valid API key and internet access. Soil-health and pest content is advisory only and does not replace laboratory testing or local agricultural expertise.

## 3. Functional Requirements
- FR-01: A user can register with name, email and password.
- FR-02: The system hashes passwords and issues a JWT after successful authentication.
- FR-03: A logged-in farmer can view and create farm profiles.
- FR-04: A farmer can delete their own farm profiles.
- FR-05: A farmer can create crop records linked to a farm.
- FR-06: A farmer can view, update the status of, and delete their own crop records.
- FR-07: The dashboard displays farm and crop counts.
- FR-08: A user can request weather for a city; the system shows live data when configured or setup guidance otherwise.
- FR-09: A logged-in user can view general pest, weather-safety and soil-health reminders.
- FR-10: The interface provides English and Hindi labels for the main navigation and forms.
- FR-11: API errors return a JSON message and appropriate HTTP status.

## 4. Non-Functional Requirements
- NFR-01 Usability: responsive layout suitable for desktop and mobile.
- NFR-02 Security: passwords are hashed; protected APIs require JWT; records are scoped to the authenticated owner.
- NFR-03 Maintainability: frontend, routes, models and middleware are separated.
- NFR-04 Reliability: database connection errors are logged and prevent the API from silently starting without a database.
- NFR-05 Performance: list queries are scoped by owner and sorted by creation date.
- NFR-06 Privacy: never commit `.env`, secrets, or real farmer personal data to source control.

## 5. Data Requirements
### User
`_id`, `name`, `email`, `password` (bcrypt hash), `role`, `preferredLanguage`, timestamps.
### Farm
`_id`, `owner`, `name`, `location`, `areaAcres`, `soilType`, `irrigation`, timestamps.
### Crop
`_id`, `owner`, `farm`, `name`, `season`, `sowingDate`, `expectedHarvest`, `status`, `notes`, timestamps.

## 6. External Interface Requirements
- Frontend: React SPA, React Router, Axios, Bootstrap.
- Backend: JSON REST API using Express.
- Database: MongoDB through Mongoose.
- Optional weather provider: OpenWeatherMap current weather API.

## 7. Acceptance Criteria
1. A user can register and log in with valid credentials.
2. Unauthenticated requests to protected endpoints return HTTP 401.
3. A logged-in user can add a farm and see it after refresh.
4. A logged-in user can add a crop linked to their own farm and update its status.
5. Users cannot list or modify another user's farm/crop records.
6. Weather endpoint returns configuration guidance without a key and live provider data with a valid key.
7. The app is usable at common mobile and desktop widths.

## 8. Limitations and Future Scope
The current deliverable does not claim automated AI diagnosis. Future modules can include validated soil-test analysis, disease image classification, notifications, resource marketplace and orders, expert booking, community forum, and a dedicated admin dashboard. These require additional validated workflows, integrations and testing.

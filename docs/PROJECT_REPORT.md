# AgriTech — Project Report

## Abstract
AgriTech is a web-based smart farming management prototype that applies accessible digital tools to everyday farm record keeping. Farmers can create a farm profile, track crops and crop status, request weather information for a selected city, and read general reminders about pest inspection, weather safety and soil testing. The application uses the MERN technology family: MongoDB, Express.js, React.js and Node.js.

## Problem Statement
Farm information may be spread across paper records or memory, making it difficult to maintain consistent crop records and quickly review useful information. Farmers may also face language and accessibility barriers when using generic digital products. A simple responsive and multilingual web application can help centralise farm records and encourage data-informed decisions.

## Objectives
- Provide a simple farmer-facing dashboard.
- Store farm and crop records persistently.
- Protect personal records with authentication and owner-based access control.
- Make weather lookup available through an external API integration.
- Present practical, non-diagnostic agriculture reminders.
- Provide a foundation that can be extended with verified agricultural services.

## Proposed System
The frontend is a React single-page application. Axios sends JSON requests to the Express REST API. JWT middleware protects farmer-specific routes. Mongoose models store users, farms and crops in MongoDB. A weather route optionally calls a weather provider using a server-side API key.

## Modules
1. Authentication and profile creation.
2. Farm profile management.
3. Crop tracking and status updates.
4. Weather lookup.
5. General alerts and advice.
6. Technical documentation and manual test plan.

## Tools and Technologies
React.js, React Router, Axios, Bootstrap, Node.js, Express.js, MongoDB, Mongoose, JWT, bcryptjs, Git and GitHub.

## Testing Summary
A manual test checklist is provided in `FEATURES_AND_TESTING.md`. Test registration, login, protected routes, farm creation/deletion, crop creation/status changes, ownership isolation, weather configuration and responsive layouts before evaluation.

## Conclusion
AgriTech demonstrates a modular full-stack approach to digitising selected farm-management tasks. It is a functional student project foundation, while advanced AI diagnosis, automatic pest detection, marketplace, consultation and admin-management features remain future enhancements rather than implemented claims.

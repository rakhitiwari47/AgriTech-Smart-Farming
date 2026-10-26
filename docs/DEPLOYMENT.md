# Deployment and submission checklist

## GitHub
1. Create a new public repository named `agritech-smart-farming`.
2. Extract this ZIP and open the extracted folder in VS Code.
3. In a terminal at the project root:
   ```bash
   git init
   git add .
   git commit -m "Initial AgriTech smart farming project"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/agritech-smart-farming.git
   git push -u origin main
   ```
4. Replace `YOUR-USERNAME` with your GitHub username. Never commit `.env`.

## Live demo
Deploy the backend to a Node-compatible host and the frontend to a static React host. Create a MongoDB Atlas database and configure environment variables on the hosting provider:
- Backend: `MONGO_URI`, `JWT_SECRET`, `CLIENT_URL`, optional `OPENWEATHER_API_KEY`
- Frontend: `REACT_APP_API_URL=https://YOUR-BACKEND-DOMAIN/api`

Then rebuild/redeploy the frontend and test registration/login on the public URL. Hosting providers and free-tier limits change, so check their current documentation before deployment.

## SkillWallet
- Upload the ZIP/project files if the assignment accepts a project archive, or submit the GitHub repository URL.
- Add the real live demo URL only after deployment.
- Add the GitHub URL after the repository exists.
- Attach screenshots and the demo video if those fields are available.
- Do not submit made-up demo URLs.

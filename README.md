# Elias Portfolio

A modern, interactive portfolio website for Elias (Full Stack Developer).

Check out the NPM Package if you want to make your own portfolio, just like this one!
[Portfolio Template NPM](https://github.com/elias4044/portfolio-template)

## Features
- Responsive, animated design with smooth scrolling
- Hero, About, Projects, Collaboration, and Contact sections
- Contact form with Discord webhook integration (Node.js backend)
- Interactive UI with custom JS animations and notifications
- Modern CSS with custom dot and rainbow effects

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/)

### Installation
1. **Clone the repository:**
   ```sh
   git clone https://github.com/repulsord/elias4044.git
   cd elias4044
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Configure environment variables:**
   - Copy `.env.example` to `.env` and set your Discord webhook URL:
     ```sh
     cp .env.example .env
     # Edit .env and set DISCORD_WEBHOOK_URL
     ```

### Running Locally
- **Frontend:**
  Just open `index.html` in your browser for static preview.
- **Backend (Contact Form):**
  ```sh
  node ./api/express-server.js
  # or use nodemon for development
  # npx nodemon ./api/express-server.js
  ```
  The backend will run at `http://localhost:3000` by default.

### Deployment
- Deploy the static site (HTML/CSS/JS) to GitHub Pages, Vercel, or Netlify.
- For the contact form backend, deploy to a Node.js host (e.g., Vercel, Render, or your own server).

## Project Structure
```
index.html           # Main HTML file
styles.css           # Main CSS file
script.js            # Main JS file
api/                 # Backend API (Node.js)
  contact.js         # API handler for contact form (for serverless)
  express-server.js  # Express server for local/dev
favicon/             # Favicon and icons
.env.example         # Example environment variables
```

## Environment Variables
Create a `.env` file in the root:
```
DISCORD_WEBHOOK_URL=your_discord_webhook_url_here
```

## License
MIT

---
Portfolio by Elias ([@repulsord](https://github.com/repulsord))

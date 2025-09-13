# 🚀 Elias Portfolio [V2]
![GitHub License](https://img.shields.io/github/license/elias4044/elias-portfolio)


A modern, interactive portfolio website for Elias — Full Stack Developer.

---

## ✨ Features

- **Responsive, animated design** — Looks great on any device.
- **Smooth scrolling & transitions** — Seamless navigation experience.
- **Hero, About, Projects, Collaboration, and Contact sections** — All the essentials.
- **Contact form with Discord webhook integration** — Get messages straight to Discord.
- **Interactive UI** — Custom JS animations, mouse trails, notifications, and more.
- **Modern CSS** — Custom dot/rainbow effects, gradients, and subtle animations.
- **Stats & Achievements** — Display GitHub stats, coding streaks, and more.
- **Modular React Components** — Easy to extend and customize.
- **API Endpoints** — For analytics, contact, GitHub, newsletter, and more.
- **Ready for deployment** — Works on Vercel, Render and more.

---

## 🗂️ Project Structure

```
app/            # Next.js app directory (pages, API routes, styles)
components/     # Reusable React components (UI, sections, cards, etc.)
lib/            # Utility functions and API clients
hooks/          # Github data hooks (useGitHubStats, useGitHubRepositories)
public/         # Static assets (images, icons, etc.)
.env.example    # Example environment variables
```

---

## ⚡ Getting Started

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
     and your Github Access Token:
     ```sh
     # Edit .env and set GITHUB_ACCESS_TOKEN
     ```

---


### Running Locally

- **Full Project:**
  - For full Next.js experience, run:
    ```sh
    npm run dev
    ```
    Then visit [http://localhost:3000](http://localhost:3000).

---

## 🚢 Deployment

- **Next.js App:** Deploy the app directory to ![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)  or any Node.js host.

---

## 🔧 Environment Variables

Create a `.env` file in the root:

```
DISCORD_WEBHOOK_URL=your_discord_webhook_url_here
GITHUB_ACCESS_TOKEN=your_github_access_token_here
```

---

## 🛠️ Customization

- **Edit your profile, skills, and projects** in app, components, or index.html.
- **Change theme colors** in styles.css (`:root` variables).
- **Add new sections or animations** by extending React components or JS functions.

---

## 🤝 Contributing

Pull requests, suggestions, and issues are welcome!  
Feel free to fork, customize, and share your own portfolio.

---

## 📄 License

MIT

---

Portfolio by Elias ([GitHub @elias4044](https://github.com/elias4044))

> _Inspired by creativity, built for impact._
```
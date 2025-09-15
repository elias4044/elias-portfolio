# 🚀 Elias Portfolio [V2]

<p align="center">
  <img src="https://img.shields.io/github/license/elias4044/elias-portfolio" alt="License">
  <img src="https://img.shields.io/github/stars/elias4044/elias-portfolio?style=social" alt="Stars">
  <img src="https://img.shields.io/github/forks/elias4044/elias-portfolio?style=social" alt="Forks">
  <img src="https://img.shields.io/github/last-commit/elias4044/elias-portfolio" alt="Last Commit">
  <img src="https://img.shields.io/badge/Next.js-15-black?logo=nextdotjs" alt="Next.js">
  <img src="https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white" alt="React">
</p>

<p align="center">
  <strong>A modern, interactive portfolio website for me (Elias) — Full Stack Developer.</strong>
</p>

---

## ✨ Features

- **Responsive, Animated Design** – Looks great on any device
- **Smooth Navigation** – Scroll animations & transitions
- **Core Sections** – Hero · About · Projects · Collab · Contact
- **Discord Webhook Contact Form** – Messages sent straight to Discord
- **Interactive UI** – Mouse trails, notifications, custom animations
- **Modern CSS & Effects** – Gradients, dot/rainbow effects, subtle micro-animations
- **Stats & Achievements** – GitHub streaks, repo stats, coding activity
- **Modular React Components** – Easy to edit and extend
- **API Endpoints** – Analytics, contact, GitHub data, newsletter, and more
- **Deployable Anywhere** – Vercel, Render, Netlify supported

---

## 🗂️ Project Structure

```text
app/            # Next.js app directory (pages, API routes, styles)
components/     # Reusable React components (UI, sections, cards, etc.)
lib/            # Utility functions and API clients
hooks/          # GitHub data hooks (useGitHubStats, useGitHubRepositories)
public/         # Static assets (images, icons, etc.)
.env.example    # Example environment variables
````

---

## ⚡ Quick Start (For Development)

> **Note:** This repo is not meant for self-hosting. Forking for personal learning/customization is welcome.

### Prerequisites

* [Node.js](https://nodejs.org/) (v16+ recommended)
* [npm](https://www.npmjs.com/)

### Installation

```bash
git clone https://github.com/elias4044/elias-portfolio.git
cd elias-portfolio
npm install
cp .env.example .env
# Edit .env and set your DISCORD_WEBHOOK_URL and GITHUB_ACCESS_TOKEN
npm run dev
```

Visit **[http://localhost:3000](http://localhost:3000)** to see it running locally.

---

## 🔧 Environment Variables

| Variable              | Description                   |
| --------------------- | ----------------------------- |
| `DISCORD_WEBHOOK_URL` | Webhook for contact form      |
| `GITHUB_ACCESS_TOKEN` | Token for GitHub API requests |

---

## 🚢 Deployment

* Recommended: **[Vercel](https://vercel.com/)**
* Also works on Render, Netlify, or any Node.js-compatible platform.

---

## 🛠️ Customization

* Edit profile, skills, and projects inside `app/` or `components/`
* Tweak theme colors in `styles.css` (via `:root` variables)
* Add new sections by creating new React components
* Modify animations in JS for custom effects

---

## 🤝 Contributing

Contributions are welcome!
Open issues, submit PRs, or fork it to make your own version.

---

## 📄 License

Licensed under [MIT](LICENSE).
Portfolio by **Elias** ([GitHub @elias4044](https://github.com/elias4044)).

> *Inspired by creativity, built for impact.*

---

<p align="center">
  <sub>⭐ If you like this project, consider starring the repo!</sub>
</p>
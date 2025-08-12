# Collab Stars! — StarBot ⭐

[![Languages](https://skillicons.dev/icons?i=js,ts,nodejs,mongodb,bash,nextjs,prisma)](https://skillicons.dev)

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Node.js Version](https://img.shields.io/badge/node.js-20.12%2B-brightgreen)](https://nodejs.org/en)
![Platform](https://img.shields.io/badge/platform-cross--platform-lightgrey)
![Status](https://img.shields.io/badge/status-active-success)

> [!NOTE]  
> This project **base** can be generated using the [Constant CLI](https://github.com/rinckodev/constatic).  
> Full documentation available at: https://constatic-docs.vercel.app/docs/discord/start

> [!WARNING]  
> Required [Node.js](https://nodejs.org/en) version: **20.12 or higher**

---

## 📌 Table of Contents

- [🎯 Project Objective](#-project-objective)
- [🧰 Technologies](#-technologies)
- [🏗️ Architecture](#️-architecture)
- [⚙️ Usage Instructions](#️-usage-instructions)
- [🔧 Available Scripts](#-available-scripts)
- [📦 Features & Structures](#-features--structures)
- [⚠️ Requirements & Limitations](#️-requirements--limitations)
- [🤝 Contribution Guidelines](#-contribution-guidelines)
- [📄 License](#-license)
- [📬 Contact](#-contact)

---

## 🎯 Project Objective

**Collab Stars** is the most complete Discord bot boilerplate available — built with TypeScript and designed for performance, scalability, and collaborative development.

It was created to:

- Provide a **scalable and extensible base** for Discord bots.
- Simplify bot development using **modular, typed, and documented** code.
- Integrate seamlessly with the tools and workflows developed by the [Collab Stars](https://github.com/CollabStars) organization.

---

## 🧰 Technologies

- **Language:** TypeScript
- **Runtime:** Node.js 20.12+
- **Frameworks & Tools:**
  - [Discord.js](https://discord.js.org/) v14+
  - [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/)
  - [Dotenv](https://www.npmjs.com/package/dotenv)
  - [TSup](https://tsup.egoist.dev/) for bundling

---

## 🏗️ Architecture

This project uses a clean, layered architecture inspired by modern backend practices:

- **⚙️ Command System**  
  Slash commands are defined modularly and auto-registered on startup.

- **🎙️ Event Layer**  
  All event listeners (e.g., `messageCreate`, `interactionCreate`) are handled independently.

- **📡 Responders System**  
  Custom message responders allow dynamic reactions to specific content.

- **📁 Structured Filesystem**  
  Organized with clear folders: `commands/`, `events/`, `responders/`, `utils/`, etc.

---

## ⚙️ Usage Instructions

### 1. Clone the repository:
```bash
git clone https://github.com/seu-usuario/collab-stars.git
cd collab-stars
```

### 2. Install dependencies:
```bash
npm install
```

### 3. Configure environment:
Create a `.env` file with your bot token and other settings:
```
DISCORD_TOKEN=your_token_here
CLIENT_ID=your_bot_client_id
GUILD_ID=optional_dev_guild_id
```

### 4. Run the bot:
```bash
npm run dev
```

---

## 🔧 Available Scripts

| Command       | Description                           |
|---------------|---------------------------------------|
| `dev`         | Run bot in development mode (ts-node) |
| `build`       | Build the TypeScript project          |
| `watch`       | Rebuild automatically on file change  |
| `start`       | Run the compiled project              |

---

## 📦 Features & Structures

Explore each module in the official documentation:

- 📜 [Commands](https://constatic-docs.vercel.app/docs/discord/commands)
- 🤖 [Responders](https://constatic-docs.vercel.app/docs/discord/responders)
- 🔊 [Events](https://constatic-docs.vercel.app/docs/discord/events)

> You can extend any of these systems using TypeScript interfaces and classes to fit your bot's goals.

---

## ⚠️ Requirements & Limitations

- ✅ Requires Node.js `v20.12` or higher
- 🔐 Bot token must be kept private and loaded via `.env`
- 🧪 This is a **base project** — not production-ready without adjustments

---

## 🤝 Contribution Guidelines

We welcome contributions that improve structure, performance, and clarity.  
Before contributing, please read the [full contribution guide](./CONTRIBUTING.md).

To contribute:

1. Fork this repository.
2. Create a feature branch (`git checkout -b feat/new-feature`).
3. Commit and push your changes.
4. Open a pull request with a clear description.

---

## 📄 License

This project is licensed under the **MIT License**.  
See the [LICENSE](./LICENSE) file for more details.

## 📬 Contact

- Developed by [@francisc0arauj0](https://github.com/francisc0arauj0), [@gontroller](https://github.com/gontroller), [@svyc](https://github.com/svyc), and [@Vyzer9](https://github.com/Vyzer9)
- Contribute or report issues via [GitHub Issues](https://github.com/Vyzer9/collab-stars/issues)

<br>
<br>

---

> 🧠 _This project is maintained by [@francisc0arauj0](https://github.com/francisc0arauj0), [@gontroller](https://github.com/gontroller), [@svyc](https://github.com/svyc), and [@Vyzer9](https://github.com/Vyzer9) under the [Collab Stars](https://github.com/CollabStars) organization._  
> Designed to boost productivity, code quality, and community collaboration.

<img width="1536" height="1024" alt="image" src="https://github.com/user-attachments/assets/0e2b2517-e54c-4042-91dd-c0e763b0c74b" />


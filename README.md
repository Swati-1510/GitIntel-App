# GitIntel Project

# GitIntel 🚀 — Full-Stack Developer Analytics Mobile Command Center

GitIntel is a high-density, cyberpunk-inspired developer analytics platform built for tech recruiters, engineering managers, and open-source maintainers. Instead of scanning raw commit histories or jumping between chaotic browser tabs, GitIntel aggregates distributed GitHub user data, framework proficiencies, and repository telemetry into a gamified, ultra-modern mobile dashboard.

---

## 📱 Core Pages & Features (The MVP Blueprint)

### 1. Search & Profile Explorer Tab (`search.tsx`)
*   **Active Indicator Inset Search Bar:** Features a custom, recessed dark-input capsule that detects focus states via native event listeners (`onFocus` / `onBlur`) to dynamically trigger a vibrant neon-blue perimeter glow and deep shadow boundary.
*   **Horizontal Capsule Sliders:** A fluid horizontal tag slider built using nested `ScrollView` mechanics, allowing users to scroll through recent history strings wrapped in isolated layout badges.
*   **The AI Profile Summary:** A custom 3D card layout executing an absolute positioning framework to pin a live floating presence dot complete with anti-bleeding clip rings over circular avatar boundaries.

### 2. Skill Matrix & Heatmap Tab (`skills.tsx`)
*   **Horizontal Linear Gradient Progress Lines:** Integrates native multi-color linear gradient render trees (`expo-linear-gradient`) to map granular framework capability vectors (e.g., *TypeScript: 60%*, *Rust: 10%*) across responsive, proportional metric rails.
*   **Layered Action Buttons:** Employs precise text tracking and outline padding boundaries to host responsive system links without breaking vertical flex-flow constraints.

### 3. Developer Head-to-Head Comparison Board (`compare.tsx`)
*   **Dynamic Component Reusability (Props System):** Instantiates a generic, type-safe blueprint card component twice on a single page context, passing distinct vector arguments down the hierarchy to render asymmetric user info without code duplication.
*   **Multi-Line Text Flow Controls:** Utilizes string line-break indicators (`\n`) and vertical flex distribution metrics to support dynamic names and location text alongside custom vertical layout divider lines.

### 4. Shared System Logging Trace Component (`SystemLog.tsx`)
*   **Window Frame Simulation:** Simulates a macOS code terminal equipped with top bar headers, absolute traffic-light controls, and strict layout boundary bounding (`overflow: "hidden"`).
*   **Defensive Text Wrapping Grid:** Solves cross-axis container expansion bugs using specific `flexShrink` properties and fixed-width boundary columns. This guarantees status tags (`FETCH`, `SUCCESS`, `WARN`, `DONE`) stay in a straight parallel column while multi-line trace code wraps cleanly on the screen.

### 5. Secure Authentication System (`(auth)`)
*   **Client-Side Session Token Management:** Uses secure device memory wrappers to preserve session tickets locally, keeping users logged in across application reboots.
*   **Cryptographic Vault Gatekeeping:** Fully handles registration and secure validation routes over local network endpoints to protect sensitive user parameters before initializing dashboard streams.

---

## 🛠️ The Full-Stack Technical Architecture

### Frontend Mobile Engine
*   **React Native & Expo (v50+)** — Native layout context rendering.
*   **TypeScript** — Structural safety and generic component contract definitions.
*   **Expo Router** — File-based modular page navigation routing.
*   **Flexbox Layout Architecture** — Responsive grid mapping using cross-axis alignments and content-sized tracking layouts.

### Backend Routing Infrastructure
*   **Node.js & Express** — High-performance RESTful API configuration.
*   **Bcrypt.js** — Cryptographic salting and server-side hashing of account passwords.
*   **JSON Web Tokens (JWT)** — State-isolated authentication and payload-signed session tokens.
*   **CORS Middleware** — Native multi-origin cross-device network pipeline authorization.

### Database Persistence Layer
*   **MongoDB Atlas** — Cloud-hosted cluster handling persistent data records.
*   **Mongoose ODM** — Formulating strict schemas and data schemas on non-relational document vectors.

---

## ⚙️ Environment Configuration & Setup

### Prerequisites
*   Node.js (v18 or higher)
*   Expo Go app on your physical mobile device or an Emulator (Android Studio / Xcode)

### Repository Structural Tree
确保你的工程目录组织结构如下：
```text
/GitIntel-Project
  ├── /frontend  <-- React Native Mobile App
  └── /backend   <-- Node.js Express REST API
```

### 1. Running the Backend Server
Navigate into your `/backend` folder, install your server dependencies, and configure your secrets file:
```bash
cd backend
npm install
```
Create a file named `.env` in the root of the `/backend` folder and populate it with your local runtime parameters:
```env
PORT=3000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_custom_secret_key_string
```
Fire up the backend node daemon listening engine:
```bash
node server.js
```

### 2. Running the Mobile Frontend Application
Open a second terminal window, navigate into your `/frontend` directory, and wire up the client extensions:
```bash
cd frontend
npm install
```
Start the local Metro Bundler server with an active cache clearance instruction:
```bash
npx expo start -c
```
*Scan the generated QR code using your **Expo Go** application to render the live dark dashboard directly on your physical hardware test device.*

---

## 💼 Fresher Technical Competence Proofs (For Interviewers)
This Minimum Viable Product (MVP) proves mastery over the following concepts during live engineering reviews:
*   **Component Composition:** Architecture built utilizing isolated atomic UI bricks (Lego method) rather than bloated monolithic files.
*   **Network Synchronization:** Bridges the mobile environment to local workstation networks by replacing local loopback traps with static local IPv4 matching bridges.
*   **Data Resiliency:** Uses safe defensive optional chaining (`?.`) array handling to prevent mobile interface crashes during data pipeline delays.
*   **Server-Side Security:** Enforces strict field encryption to ensure unhashed parameters are never exposed across network pipelines or database records.


## Packages Used

### Frontend (React Native / Expo)
*   **`expo`**: The core framework for building and running universal React applications.
*   **`expo-router`**: Provides file-based routing and navigation for the React Native app.
*   **`react`, `react-native`, `react-native-web`**: The core libraries for building the user interfaces and components.
*   **`@react-navigation/...`**: Foundational libraries for complex routing and screen transitions.
*   **`react-native-svg` & `react-native-svg-transformer`**: Allows the app to render and import scalable vector graphics (SVGs) natively.
*   **`react-native-reanimated` & `react-native-gesture-handler`**: Used for creating smooth, 60fps animations and handling complex touch gestures.
*   **`expo-image`, `expo-font`, `expo-linear-gradient`**: Utilities for optimized image loading, custom font management, and rendering gradient backgrounds.
*   **`expo-glass-effect`**: Used to apply modern glassmorphism styling to UI elements.
*   **`typescript`**: Adds static typing to JavaScript to catch errors early and improve developer experience.

### Backend (Node.js / Express)
*   **`express`**: A minimal and flexible Node.js web application framework used to build our robust API.
*   **`mongoose`**: An Object Data Modeling (ODM) library used to interact with the MongoDB database.
*   **`dotenv`**: Loads environment variables from a `.env` file to keep sensitive credentials secure.
*   **`cors`**: Middleware to enable Cross-Origin Resource Sharing, allowing the frontend to securely communicate with the backend API.
*   **`bcryptjs`**: Used for hashing and salting user passwords securely before storing them in the database.
*   **`jsonwebtoken` (JWT)**: Used for generating secure tokens to manage user authentication and API route protection.

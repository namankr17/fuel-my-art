# ⛽ Fuel My Art

**Fuel My Art** is a multi-page web platform that empowers creators to receive support from their fans. Creators can set up accounts, configure payment credentials (simulated for now), and share their profile where fans can send support along with personal messages. The platform is built using **Next.js**, **React**, and **Tailwind CSS** for a fast, modern, and responsive experience.

---

## 🌐 Live Demo

[🔗 Click here to view the live site](https://fuel-my-art.vercel.app/)

---

## 🧠 Features

- 🔐 User authentication (login/signup) using NextAuth.js
- 💸 Simulated payment system (real gateway coming soon)
- 💬 Fans can leave messages with their support
- 📃 Multi-page layout with home, about, login, dashboard and user profile pages.
- 👤 Public profile pages for creators with
    - Customisable cover and profile pic
    - Supporters analytics
    - Payment window
    - Recent supporters with their name and message
- 🧾 Dashboard for creators to manage their account
- 📲 Fully responsive to adapt to all devices

---

## 🛠️ Tech Stack

- **Next.js** - Full Stack Framework
- **React** - Frontend library for building UI
- **Tailwind CSS** - Utility-first styling
- **MongoDB** - NoSQL database for storing users and payments data
- **Mongoose** - ODM for MongoDB
- **NextAuth.js** - Authentication
- **Javascript** - Core programming logic, both frontend and backend
- **Node.js** - Runtime environment
- **HTML** - Basic Page Structure
- **Vercel** - Hosting

---

## 🖥️ Pages Overview

- `/` → Home page
- `/about` → About Us
- `/login` → Login/Register
- `/dashboard` → Creator's personal dashboard
- `/profile/[username]` → Public profile of a creator

---

## 🚀 Getting Started

### Prerequisites

- Node.js
- npm
- MongoDB (local or cloud like MongoDB Atlas)

### Installation Steps

1. **Clone the repository**

```bash
git clone https://github.com/namankr17/fuel-my-art.git
cd fuel-my-art
```

2. **Install dependencies**

```bash
npm install
```

3. **Create a `.env.local` file in the root and add:**

```env
GITHUB_ID=your_oauth_github_id
GITHUB_SECRET=your_oauth_github_secret
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_CLIENT_ID=your_google client_id
```

4. **Run the development server**

```bash
npm run dev
```
Open http://localhost:3000 in your browser.

---

## 🔮 Planned Features

- 💳 Payment gateway integration (Stripe, Razorpay, etc.)
- 📱 Profile enhancement with
    - Bio and Social links
    - Posts to share their works
- 📊 Analytics page for creators

---

*Made with 🧡 by [@namankr17](https://github.com/namankr17)*

# 📱 Mini Social Post Application

A full-stack MERN social media feed application inspired by TaskPlanet's social interface. Users can register, log in, create posts, like, and comment — all in a sleek, responsive UI with dark mode support.

## 🚀 Live Demo

- **Frontend:** [Vercel Link Here]
- **Backend API:** [Render Link Here]

---

## ✨ Features

- 🔐 **Authentication** — Register & Login with hashed passwords (bcrypt) and JWT tokens
- 📝 **Create Posts** — Share thoughts directly from the feed
- ❤️ **Like / Unlike** — Toggle likes on any post in real-time
- 💬 **Comments** — Add comments with instant updates
- 🌙 **Dark Mode** — One-click theme toggle
- 📱 **Responsive** — Mobile-first design that scales beautifully to desktop
- 🎨 **TaskPlanet UI** — Pixel-perfect recreation of the TaskPlanet social feed

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React (Vite), Axios, React Router DOM |
| **Styling** | Vanilla CSS (Dark Mode, Responsive) |
| **Backend** | Node.js, Express |
| **Database** | MongoDB Atlas (Mongoose) |
| **Auth** | JWT + bcrypt |
| **Deployment** | Render (Backend) + Vercel (Frontend) |

---

## 📁 Project Structure

```
Mini-Social-Post-Application/
├── backend/
│   ├── controllers/
│   │   ├── auth.js          # Register & Login logic
│   │   └── posts.js         # Create, Get, Like, Comment logic
│   ├── middleware/
│   │   └── auth.js          # JWT verification middleware
│   ├── models/
│   │   ├── User.js          # User schema (username, email, password)
│   │   └── Post.js          # Post schema (description, likes, comments)
│   ├── routes/
│   │   ├── auth.js          # Auth routes
│   │   └── posts.js         # Post routes
│   ├── index.js             # Express server entry point
│   └── .env                 # Environment variables
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Login.jsx    # Login page
│   │   │   ├── Register.jsx # Register page
│   │   │   └── Feed.jsx     # Main social feed
│   │   ├── components/
│   │   │   └── PostCard.jsx # Reusable post card component
│   │   ├── App.jsx          # Router configuration
│   │   ├── App.css          # All styles + dark mode
│   │   └── index.css        # Global resets
│   └── index.html
├── PROGRESS.md              # Development progress tracker
└── README.md
```

---

## 🔌 API Endpoints

### Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login and get JWT token |

### Posts
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/posts` | Fetch all posts (sorted newest first) |
| POST | `/api/posts/create` | Create a new post |
| PATCH | `/api/posts/:id/like` | Like / Unlike a post |
| POST | `/api/posts/:id/comment` | Add a comment to a post |

> All post endpoints require `Authorization: Bearer <token>` header.

---

## ⚡ Quick Start

### Prerequisites
- Node.js (v18+)
- MongoDB Atlas account
- Git

### 1. Clone the repo
```bash
git clone https://github.com/lucky-smash/Mini-Social-Post-Application.git
cd Mini-Social-Post-Application
```

### 2. Setup Backend
```bash
cd backend
npm install
```

Create a `.env` file:
```env
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

Start the server:
```bash
npm run dev
```

### 3. Setup Frontend
```bash
cd frontend
npm install
npm run dev
```

Visit `http://localhost:5173` in your browser!

---

## 📸 Screenshots

### Light Mode Feed
> Social feed with create post, filter pills, and post cards

### Dark Mode Feed
> Full dark theme with one-click toggle

---

## 👨‍💻 Author

**Lucky Smash** — [GitHub](https://github.com/lucky-smash)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

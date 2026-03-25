import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes/auth.js';
import postRoutes from "./routes/posts.js";

// Load environment variables (like PORT or MONGO_URI)
dotenv.config();

// Create the Express application instance
const app = express();

// MIDDLEWARE
app.use(express.json()); // Parses incoming JSON data in the request body
app.use(cors());         // Allows our frontend (running on a different port) to access this backend

// AUTH ROUTES
app.use('/api/auth', router);

// POST ROUTES
app.use("/api/posts", postRoutes);


// BASIC TEST ROUTE
app.get('/', (req, res) => {
  res.send('API is running...');
});


// START SERVER & DATABASE CONNECTION
const PORT = process.env.PORT || 5000;

// Update this URI in your .env file with your actual MongoDB connection string!
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/mini_social';

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB successfully.');

    // We only start listening for requests AFTER ensuring the database connects
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('❌ Failed to connect to MongoDB', error);
  });

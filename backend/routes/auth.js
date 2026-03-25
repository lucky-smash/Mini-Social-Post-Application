import express from 'express';
import { register } from '../controllers/auth.js'; // Import your logic!
import { login } from '../controllers/auth.js';

// Create an isolated router just for Authentication paths
const router = express.Router();

// When a POST request hits '/register' or '/login', hand the request over to our register function
router.post('/register', register);
router.post('/login', login);

// Export this router so our main server can use it
export default router;

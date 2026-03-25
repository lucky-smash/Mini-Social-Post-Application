import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";


// registration api ===:::

export const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            return res.status(400).json({ error: "Email already exists." });
        }

        const salt = await bcrypt.genSalt(); //this line generates the salt 
        const hashedPassword = await bcrypt.hash(password, salt); // here we use that salt for hashing

        const newUser = await User.create({
            username: username,
            email: email,
            password: hashedPassword,

        });

        res.status(201).json(newUser);

    } catch (err) {
        res.status(500).json({ error: err.message });
    };

}

// login api 

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email })
        if (!user) return res.status(400).json({ error: "User not found." })

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ error: "Invalid credentials." })

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" })

        delete user.password;
        res.status(200).json({ token, user })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// Generate JWT Token
const generateToken = (user) => {
    return jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET || "defaultsecret", {
        expiresIn: "7d",
    });
};

exports.signup = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user already exists
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Create new user
        user = new User({ email, password });
        await user.save();

        // Generate token
        const token = generateToken(user);

        res.status(201).json({ token, user: { id: user._id, email: user.email } });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

exports.signin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // Check password
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // Generate token
        const token = generateToken(user);

        res.json({ token, user: { id: user._id, email: user.email } });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

import express from 'express';
const router = express.Router();
import User from'../models/User'; // Pastikan model User Anda benar

// GET all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST a new user
router.post('/', async (req, res) => {
  const user = new User(req.body);
  try {
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Tambahkan rute lain seperti GET by ID, UPDATE, DELETE

module.exports = router;

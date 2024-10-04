import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';


const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/manufacture', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define User Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

// Routes
app.post('/api/register', async (req, res) => {
  const { name, email, password } = req.body;
  const newUser = new User({ name, email, password });
  await newUser.save();
  res.status(201).json(newUser);
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});

// Middleware
app.use(cors()); // Mengizinkan CORS
app.use(morgan('dev')); // Logging permintaan ke konsol
app.use(bodyParser.json()); // Parsing JSON

// Routes
// Tambahkan rute Anda di sini

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
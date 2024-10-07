const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const UserModel = require('./models/User');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/User", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
.catch(err => console.log('MongoDB connection error:', err));

app.post('/register', (req, res) => {
    UserModel.create(req.body)
        .then(user => res.json(user))  // Respond with the created user object
        .catch(err => res.status(500).json({ error: err.message }));  // Proper error handling
});

// Start the server
app.listen(3001, () => {
    console.log("Server is running on port 3001");
});

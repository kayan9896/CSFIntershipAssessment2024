const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const surveyRoutes = require('./routes/surveyRoutes');

const app = express();
const port = 3000; // Or your desired port

// Middleware
app.use(express.json());
app.use('/api/surveys', surveyRoutes); // Mount survey routes under '/api/surveys'

// Connect to MongoDB
mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Start the server
app.listen(port, () => {
  console.log(`API server listening at http://localhost:${port}`);
});
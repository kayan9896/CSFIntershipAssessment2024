const express = require('express');
const router = express.Router();
const Survey = require('../models/survey');

// POST / - Create a new survey response
router.post('/', async (req, res) => {
  try {
    const survey = new Survey(req.body);
    const savedSurvey = await survey.save();
    res.status(201).json(savedSurvey._id);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /{id} - Get a specific survey response
router.get('/:id', async (req, res) => {
  try {
    const survey = await Survey.findById(req.params.id);
    if (!survey) return res.status(404).json({ message: 'Survey not found' });
    res.json(survey);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET / - Get all survey responses
router.get('/', async (req, res) => {
  try {
    const surveys = await Survey.find();
    res.json(surveys);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
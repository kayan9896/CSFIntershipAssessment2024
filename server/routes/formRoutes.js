const express = require('express');
const router = express.Router();
const FormResponse = require('../models/formResponse');

// POST / - Create a new form response
router.post('/', async (req, res) => {
  try {
    const newResponse = await FormResponse.create(req.body);
    res.status(201).json({ id: newResponse._id });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create response' });
  }
});

// GET /{id} - Get a specific form response
router.get('/:id', async (req, res) => {
  try {
    const response = await FormResponse.findById(req.params.id);
    if (!response) {
      return res.status(404).json({ error: 'Response not found' });
    }
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch response' });
  }
});

// GET / - Get all form responses
router.get('/', async (req, res) => {
  try {
    const responses = await FormResponse.find();
    res.json(responses);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch responses' });
  }
});

module.exports = router;
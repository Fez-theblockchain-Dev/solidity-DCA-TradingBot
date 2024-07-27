// this node/express.js server will host the future web app. Currently has general back end server scaffolding code in it

// import express from 'express';

import express from 'express';

// server.js

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

// Sample endpoint for getting DCA settings
app.get('/api/dca-settings', (req, res) => {
  const settings = {
    currency: 'eth',
    interval: 'weekly',
    amount: 50
  };
  res.json(settings);
});

// Sample endpoint for updating DCA settings
app.post('/api/dca-settings', (req, res) => {
  const newSettings = req.body;
  console.log('New DCA settings:', newSettings);
  res.json({ message: 'Settings updated', settings: newSettings });
});

// Sample endpoint for viewing DCA performance
app.get('/api/dca-performance', (req, res) => {
  const performance = {
    totalInvested: 500,
    currentValue: 750,
    profit: 250
  };
  res.json(performance);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});





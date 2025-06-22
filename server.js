
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// In-memory storage
let clients = [];
let insights = [];

// Register a client
app.post('/api/client/register', (req, res) => {
  const client = { id: Date.now(), ...req.body };
  clients.push(client);
  res.status(201).json(client);
});

// Post new insight
app.post('/api/insights', (req, res) => {
  const insight = { id: Date.now(), ...req.body };
  insights.push(insight);
  res.status(201).json(insight);
});

// Get all insights
app.get('/api/insights', (req, res) => {
  res.json(insights);
});

// Health check
app.get('/', (req, res) => {
  res.send('InsightNode API is running (no database version)');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

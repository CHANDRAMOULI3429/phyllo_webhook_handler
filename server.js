require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const webhookRoutes = require('./routes/webhookRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Parse JSON requests
app.use(bodyParser.json());

// Webhook Routes
app.use('/', webhookRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

const express = require('express');
const router = express.Router();
const signatureVerifier = require('../middlewares/signatureVerifier');
const webhookController = require('../controllers/webhookController');

router.post('/webhook', signatureVerifier, webhookController.handleWebhook);

module.exports = router;

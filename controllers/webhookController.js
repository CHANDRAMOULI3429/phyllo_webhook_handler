const fs = require('fs');
const path = require('path');

// Log incoming webhook events
const logEvent = (event) => {
    const logPath = path.join(__dirname, '../logs/webhook.log');
    const logData = `${new Date().toISOString()} - Event: ${JSON.stringify(event)}\n`;
    fs.appendFileSync(logPath, logData);
};

// Handle webhook events
exports.handleWebhook = (req, res) => {
    const event = req.body;

    // Log the event
    logEvent(event);

    // Process different event types
    switch (event.type) {
        case 'ACCOUNTS.CONNECTED':
            console.log('Account Connected:', event.data);
            break;
        case 'PROFILES.ADDED':
            console.log('Profile Added:', event.data);
            break;
        default:
            console.log('Unhandled Event:', event.type);
    }

    // Acknowledge receipt of the webhook
    res.status(200).send('Webhook received');
};

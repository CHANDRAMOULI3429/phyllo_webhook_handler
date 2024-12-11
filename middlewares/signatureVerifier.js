const crypto = require('crypto');

module.exports = (req, res, next) => {
    const webhookSecret = process.env.WEBHOOK_SECRET;
    const signature = req.headers['webhook-signatures']; // Signature from headers
    const payload = JSON.stringify(req.body); // Raw body payload

    // Generate HMAC signature
    const expectedSignature = crypto.createHmac('sha256', webhookSecret).update(payload).digest('hex');

    // Check if the received signature matches the generated signature
    if (signature.includes(expectedSignature)) {
        next(); // Signature verified, proceed to the controller
    } else {
        res.status(401).send('Invalid Signature');
    }
};

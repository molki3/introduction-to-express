// Express Router
const express = require('express');

const router = express.Router();

router.get('/profile', (req, res) => res.send('Profile Page'));
router.get('/status', (req, res) => res.send('Profile Status Page'));

module.exports = router;
const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Job = require('../models/Job');

//  '/' Pertains to /gigs
router.get('/', (req, res) => {
    res.render('about', { path: 'about' } );
});


module.exports = router;
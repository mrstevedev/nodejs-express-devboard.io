const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Job = require('../models/Job');

//  '/' Pertains to /jobs
router.get('/', (req, res) => {
    res.render('register', { path: 'register' } );
});


module.exports = router;
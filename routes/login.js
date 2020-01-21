const express = require('express');
const router = express.Router();
app = express();

const mailer = require('express-mailer');

router.get('/', (req, res) => {
    res.render('login', { path: 'login' });
});

router.post('/continue', (req, res) => {
    res.render("continue", { path: 'continue' });
    const email = req.body.email;
    console.log(email);
});

module.exports = router;
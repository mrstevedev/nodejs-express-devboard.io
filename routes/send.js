const express = require('express');
app = express();
const router = express.Router();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

//  '/' Pertains to /send
router.get('/', (req, res) => {

    let { email, email_frequency } = req.query;

    res.render('send', { email, email_frequency, path: 'send', } );

    // insert email to db
});


module.exports = router;
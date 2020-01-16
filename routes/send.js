const express = require('express');
app = express();
const router = express.Router();
const exphbs = require("express-handlebars");
const mailer = require('express-mailer');
const env = require('dotenv').config();
const Email = require('../models/Email');

app.engine("handlebars", exphbs({
      defaultLayout: "email"
    })
  );
  app.set("view engine", "handlebars");

mailer.extend(app, {
    from: 'no-reply@devboard.io',
    host: 'smtp.gmail.com',
    secureConnection: true, 
    port: 465,
    transportMethod: 'SMTP',
    auth: {
        user: process.env.user,
        pass: process.env.pass
    }
});

//  '/' Pertains to /send
router.get('/', (req, res) => {

    let { email, email_frequency } = req.query;

    app.mailer.send('layouts/email', {
        to: 'stevendotpulido@gmail.com',
        subject: 'DevBoard.io Job Notifications', // REQUIRED. 
        email: email,
        frequency: email_frequency
    }, function(err) {
        if (err) {
    
            console.log(err);
            // res.send('There was an error sending the email');

            return;
        }
        console.log('mail sent');
    });

     // insert email to db
     Email.create({
        emails: email
      })
        .catch(err => console.log(err));

    res.render('send', { email, email_frequency, path: 'send', } );


});


module.exports = router;
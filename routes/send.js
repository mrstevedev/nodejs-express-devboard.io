const express = require('express');
app = express();
const router = express.Router();
const exphbs = require("express-handlebars");
const mailer = require('express-mailer');

app.engine("handlebars", exphbs({
      defaultLayout: "email"
    })
  );
  app.set("view engine", "handlebars");

mailer.extend(app, {
    from: 'no-reply@example.com',
    host: 'smtp.gmail.com',
    secureConnection: true,
    port: 465,
    transportMethod: 'SMTP',
    auth: {
        user: user,
        pass: pass
    }
});

//  '/' Pertains to /send
router.get('/', (req, res) => {

    let { email, email_frequency } = req.query;

    app.mailer.send('email', {
        to: 'stevendotpulido@gmail.com',
        subject: 'Password reset', // REQUIRED. 
        body: 'Email body',
        otherProperty: 'Other Property'
    }, function(err) {
        if (err) {
    
            console.log(err);
            res.send('There was an error sending the email');

            return;
        }
        console.log('mail sent');
    });

    res.render('send', { email, email_frequency, path: 'send', } );

    // insert email to db
});


module.exports = router;
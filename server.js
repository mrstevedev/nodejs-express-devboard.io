const lessMiddleware = require('less-middleware');
const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");
const db = require("./config/database");

const moment = require('moment');

db.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

const app = express();

// Middleware for Handlebars
// main is the template file to hold all the views eg. header, footer etc
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main",
    helpers: {
      fromNow: function(date) {
        return moment(date).fromNow();
      }
    }
  })
);
app.set("view engine", "handlebars");

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));

// Set Static Folder
app.use(require('less-middleware')('public'));

app.use(express.static("public"));

// Create Index Route
app.get("/", (req, res, next) => {
  res.redirect("/jobs");
});

// About Route
app.use("/about", require("./routes/about"));

// Jobs Route
app.use("/jobs", require("./routes/jobs"));

// Register Route
app.use("/register", require("./routes/register"));

// Login Route
app.use("/login", require("./routes/login"));

// Unsubscribe Route
app.use('/unsubscribe', require('./routes/ubsubscribe'));

app.use('/send', require('./routes/send'));

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));

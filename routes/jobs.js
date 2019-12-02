const express = require("express");
const router = express.Router();
const db = require("../config/database");
const Job = require("../models/Job");
// Get Job List
//  '/' Pertains to /jobs
router.get("/", (req, res) => {
  Job.findAll()
    .then(jobs => {
      res.render("jobs", { jobs, path: "jobs" });
    })
    .catch(err => console.log(err));
});

// Remote
router.get("/remote", (req, res) => {
  res.render("remote", { path: "remote" });
});

// get job id
// router.get('/:id', (req, res) => {
//     const id = req.params.id;
//     res.sendFile(path.join(__dirname+'/articleDetail.html'));
// });

// Display Post Job Form
router.get("/add", (req, res) => res.render("add", { path: "add" }));

// Add a job when form submits to /add
router.post("/add", (req, res) => {
  // From the request body of the post a job form
  let {
    title,
    company,
    description,
    about_company
  } = req.body;
  let errors = [];

  // Validate fields
  if (!title) {
    errors.push({ text: "Please add a job title" });
  }
  if (!company) {
    errors.push({ text: "Please add a company name" });
  }
  if (!description) {
    errors.push({ text: "Please add a job description" });
  }
  if (!about_company) {
    errors.push({ text: "Please add an employer description" });
  }

  // Check for errors
  if (errors.length > 0) {
    res.render("add", {
      errors,
      title,
      company,
      description,
      about_company,
      path: 'add'
    });
  } else {

    technologies = technologies.toLowerCase().replace(/, /g, ',');
    
    // Insert Into Table
    Job.create({
        title,
        technologies,
        budget,
        company,
        description,
        about_company
    })
    .then(job => res.redirect('/jobs'))
    .catch(err => console.log(err))
  }

  // res.redirect('/login');

  // const data = {
  //     title: 'Front-End Developer',
  //     technologies: '<span class="tag">wordpress</span> <span class="tag">html</span> <span class="tag">css</span> <span class="tag">reactjs</span>',
  //     budget: '$3000',
  //     company: '1Point21 Interactive',
  //     description: 'Pellentesque in ipsum id orci porta dapibus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Cras ultricies ligula sed magna dictum porta. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Sed porttitor lectus nibh. Proin eget tortor risus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Proin eget tortor risus. Sed porttitor lectus nibh.',
  //     contact_email: 'user2@gmail.com'
  // }
});

module.exports = router;

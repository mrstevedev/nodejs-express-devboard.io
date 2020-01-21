const express = require("express");
const router = express.Router();
const db = require("../config/database");
const Job = require("../models/Job");
const Sequelize = require('sequelize').Sequelize;
const Op = Sequelize.Op;

// Get Job List
//  '/' Pertains to /jobs
router.get("/", (req, res) => {
  Job.findAll()
    .then(jobs => {
      res.render("jobs", { jobs, path: "jobs" });
    })
    .catch(err => console.log(err));
});

// Search Route - For when a user searches, form posts to /search
router.get('/search', (req, res) => {
  console.log(req.query)
});

// Remote Route
router.get("/remote", (req, res) => {
  res.render("remote", { path: "remote" });
});

// Display Post Job Form
router.get("/add", (req, res) => {
  res.render("add", { path: "add" });
});

// Add a job when form submits to /add
router.post("/add", (req, res) => {
  // From the request body of the post a job form
  let { title, company, technologies, description, about_company } = req.body;
  let errors = [];

  // Validate fields
  if (!title) {
    errors.push({ text: "Please add a job title" });
  }
  if (!company) {
    errors.push({ text: "Please add a company name" });
  }
  if(!technologies) {
    errors.push({ text: 'Please add a technology' });
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
      technologies,
      description,
      about_company,
      path: "add"
    });
  } else {
    technologies = technologies.toLowerCase().replace(/, /g, ",");

    // Insert Into Table
    Job.create({
      title,
      technologies,
      budget,
      company,
      description,
      about_company
    })
      .then(job => res.redirect("/jobs/success"))
      .catch(err => console.log(err));
  }
});

// Get route and view for specific job clicked
router.get("/:id/:title", (req, res) => {
  const { id, title } = req.params;
  Job.findOne({
    where: {
      id: id
    }
  })
    .then((job) => {
      const company = job.company;
      const description = job.description;
      const createdAt = job.createdAt;
      const tags = job.tags;
      const company_logo_ext = job.company_logo_ext;
      res.render("job", { id, title, company, description, tags, company_logo_ext, createdAt, path: "job" });
    });
});

module.exports = router;

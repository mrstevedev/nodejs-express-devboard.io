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

// Remote Route
router.get("/remote", (req, res) => {
  res.render("remote", { path: "remote" });
});

// Display Post Job Form
router.get("/add", (req, res) => res.render("add", { path: "add" }));

// Add a job when form submits to /add
router.post("/add", (req, res) => {
  // From the request body of the post a job form
  let { title, company, description, about_company } = req.body;
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
      .then(job => res.redirect("/jobs"))
      .catch(err => console.log(err));
  }
});

// Get route and view for specific job clicked
router.get("/:id/:title", (req, res) => {
  let { id, title } = req.params;
  Job.findOne()
    .then((job) => {
      console.log(id===job.id);
      res.render("job", { id, title, path: "job" });
    });
});

module.exports = router;

const Sequelize = require('sequelize').Sequelize;
const db = require('../config/database');

const Job = db.define('job', {
    title: {
        type: Sequelize.STRING
    },
    technologies: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
    budget: {
        type: Sequelize.STRING
    },
    company: {
        type: Sequelize.STRING
    },
    contact_email: {
        type: Sequelize.STRING
    },
});

module.exports = Job;
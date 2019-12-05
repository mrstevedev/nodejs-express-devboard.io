const Sequelize = require("sequelize").Sequelize;
const db = require("../config/database");

const Job = db.define("job", {
  title: {
    type: Sequelize.STRING
  },
  tags: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  },
  company: {
    type: Sequelize.STRING
  },
  company_logo_ext: {
    type: Sequelize.STRING
  }
});

module.exports = Job;

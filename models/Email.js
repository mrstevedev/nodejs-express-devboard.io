const Sequelize = require('sequelize').Sequelize;
const db = require('../config/database');

const Email = db.define('notification_subscribers', {
    emails: {
        type: Sequelize.STRING
    }
});

module.exports = Email;
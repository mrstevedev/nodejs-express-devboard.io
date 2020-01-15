const Sequelize = require('sequelize').Sequelize;
const db =  require('../config/database');

const Users = db.define('users', {
    username: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    }
});

module.exports = Users;
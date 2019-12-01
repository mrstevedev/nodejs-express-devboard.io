const { Sequelize } = require('sequelize');
const env = require('dotenv').config();

module.exports = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
  port: '53659'
});

require('dotenv').config()
const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelizeConnection = new Sequelize(process.env.DATABASE, process.env.USERNME, process.env.PASSWORD, {
  host: process.env.HOST,
  dialect: process.env.DIALECT
});

exports.sequelizeConnection = sequelizeConnection;
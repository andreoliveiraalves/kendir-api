const { DataTypes } = require('sequelize');
const sequelize = require('../utilities/sequelize').sequelizeConnection
const EscolaProfessor = sequelize.define('escolaprofessores', {
})

exports.EscolaProfessor = EscolaProfessor
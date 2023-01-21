const { DataTypes } = require('sequelize');
const sequelize = require('../utilities/sequelize').sequelizeConnection

/**
 * @typedef Turma
 * @property {string} nome.required
 */

const Turma = sequelize.define('turma', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})

exports.Turma = Turma
const { DataTypes } = require('sequelize');
const sequelize = require('../utilities/sequelize').sequelizeConnection

/**
 * @typedef Modulo
 * @property {string} nome.required
 */

const Modulo = sequelize.define('modulo', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})

exports.Modulo = Modulo
const { DataTypes } = require('sequelize');
const sequelize = require('../utilities/sequelize').sequelizeConnection

/**
 * @typedef Jogo
 * @property {string} nome.required
 */

const Jogo = sequelize.define('jogo', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})

exports.Jogo = Jogo
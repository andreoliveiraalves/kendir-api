const { DataTypes } = require('sequelize');
const sequelize = require('../utilities/sequelize').sequelizeConnection

/**
 * @typedef Ronda
 * @property {float} numero_de_partidas.required
 * @property {float} pontuacao.required
 * @property {float} tempo_de_jogo.required
 * @property {float} total_de_erros.required
 */

const Ronda = sequelize.define('ronda', {
    numero_de_partidas: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    pontuacao: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    tempo_de_jogo: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    total_de_erros: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
})

exports.Ronda = Ronda
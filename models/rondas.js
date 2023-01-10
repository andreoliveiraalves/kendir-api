const { DataTypes } = require('sequelize');
const sequelize = require('../utilities/sequelize').sequelizeConnection

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
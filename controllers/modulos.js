const Professor = require('../models/professores').Professor
const Modulo = require('../models/modulos').Modulo
const Jogo = require('../models/jogos').Jogo
const Nivel = require('../models/niveis').Nivel
const Ronda = require('../models/rondas').Ronda
const sequelize = require('../utilities/sequelize').sequelizeConnection
const Sequelize = require('sequelize');
const { Op } = Sequelize;


const getModulosData = async (req, res) => {
    const result = [];
    try {
        const modulos = await Modulo.findAll({
            where: {
                professorId: req.params.professorId,
            },
        });
        for (const modulo of modulos) {
            const jogos = await Jogo.findAll({
                where: {
                    moduloId: modulo.dataValues.id,
                },
            });
            for (const jogo of jogos) {
                const niveis = await Nivel.findAll({
                    where: {
                        jogoId: jogo.dataValues.id,
                    },
                });
                for (const nivel of niveis) {
                    const rondas = await Ronda.findAll({
                        where: {
                            nivelId: nivel.dataValues.id,
                        },
                    });
                    result.push([modulo, rondas]);
                }
            }
        }
        res.status(200).json(result);
    } catch (err) {
        res.status(400).send(err);
    }
};
exports.getModulosData = getModulosData
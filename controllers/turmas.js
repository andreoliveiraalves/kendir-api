const Turma = require('../models/turmas').Turma
const Escola = require('../models/escolas').Escola
const Aluno = require('../models/alunos').Aluno
const Sequelize = require('sequelize');
const { Op } = Sequelize;

const getTurmasByProfessor = async (req, res) => {
    const result = []
    Escola.findAll({
        where: {
            id: {
                [Op.in]: Sequelize.literal(`(SELECT escolaid FROM escolaprofessores WHERE professorid = ${req.params.professorId})`)
            }
        }
    }).then(( async escolas => {
        for (let escola of escolas){
            await Turma.findAll({
                where: {
                    escolaId: {
                        [Op.in]: Sequelize.literal(`(SELECT id FROM turmas WHERE escolaid = ${escola.dataValues.id})`)
                    }
                }
            }).then(resposta => {
                result.push(resposta)
            })
        }
        res.status(200).json(result)
    })).catch(err => {
        res.status(400).send(err)
    })
    /* const result = []
    Turma.findAll({
        where: {
            id: {
                [Op.in]: Sequelize.literal(`(SELECT turmaid FROM escolaprofessores WHERE professorid = ${req.params.professorId})`)
            }
        }
    }).then(( async turmas => {
        for (let turma of turmas){
            console.log(turmas)
            await Ronda.count({
                where: {
                    rondaId: {
                        [Op.in]: Sequelize.literal(`(SELECT AVG(pontuacao) FROM rondas WHERE alunoid = ${aluno.dataValues.id})`)
                    }
                }
            }).then(resposta => {
                console.log(resposta)
                result.push([ronda,resposta])
            })
        }
        res.status(200).json(result)
    })).catch(err => {
        res.status(400).send(err)
    }) */
}

exports.getTurmasByProfessor = getTurmasByProfessor;
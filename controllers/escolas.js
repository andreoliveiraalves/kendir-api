const Escola = require('../models/escolas').Escola
const EscolaProfessor = require('../models/escolaprofessor').EscolaProfessor
const Turma = require('../models/turmas').Turma
const Aluno = require('../models/alunos').Aluno
const sequelize = require('../utilities/sequelize').sequelizeConnection
const Sequelize = require('sequelize');
const { Op } = Sequelize;

const criarEscola = (req, res) => {
    Escola.findOne({
        where: {
            nome: req.body.nome
            }
    }).then((result) => {
        if (result) {
            res.status(406).send('Escola já existe')
        }
        else {
            const escola = new Escola({
                nome: req.body.nome,
            })
            escola.save().then((result) => {
                res.status(200).json(result)
            }).catch((err) => {
                console.log(err)
                res.status(400).send(err)
            })
        }
    }).catch((error) => {
        console.log(error)
        res.status(400).send(error)
    })
}

//Devolver Array de objectos contendo a escola e número de alunos associados ao ecrã turmas

const getSchoolsByProfessor = async (req, res) => {
    const result = []
    Escola.findAll({
        where: {
            id: {
                [Op.in]: Sequelize.literal(`(SELECT escolaid FROM escolaprofessores WHERE professorid = ${req.params.professorId})`)
            }
        }
    }).then(( async escolas => {
        for (let escola of escolas){
            console.log(escolas)
            await Aluno.count({
                where: {
                    turmaId: {
                        [Op.in]: Sequelize.literal(`(SELECT id FROM turmas WHERE escolaid = ${escola.dataValues.id})`)
                    }
                }
            }).then(resposta => {
                console.log(resposta)
                result.push([escola,resposta])
            })
        }
        res.status(200).json(result)
    })).catch(err => {
        res.status(400).send(err)
    })
}


exports.criarEscola = criarEscola;
exports.getSchoolsByProfessor = getSchoolsByProfessor;
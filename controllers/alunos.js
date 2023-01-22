const Escola = require('../models/escolas').Escola
const EscolaProfessor = require('../models/escolaprofessor').EscolaProfessor
const Turma = require('../models/turmas').Turma
const Aluno = require('../models/alunos').Aluno
const Ronda = require('../models/rondas').Ronda
const sequelize = require('../utilities/sequelize').sequelizeConnection
const Sequelize = require('sequelize');
const { Op } = Sequelize;

getStudentsAndDatabyProfessor = async (req, res) => {
    const results = []
    try {
        const escolas = await Escola.findAll({
            where: {
              id: {
                [Op.in]: Sequelize.literal(
                  `(SELECT escolaid FROM escolaprofessores WHERE professorid = ${req.params.professorId})`
                ),
              },
            },
          });
          for (const escola of escolas) {
            const turmas = await Turma.findAll({
              where: {
                escolaId: escola.dataValues.id,
              },
            });
      
            for (const turma of turmas) {
              const alunos = await Aluno.findAll({
                where: {
                  turmaId: turma.dataValues.id,
                },
              });
              for(aluno of alunos) {
                const ronda = await Ronda.findAll({
                where: {
                  alunoId : aluno.dataValues.id,
                }
                })
                results.push([aluno,ronda]);
              }
            }
          }
          res.status(200).json(results);
    }
    catch (err) {
        res.status(400).send(err);
      }
}

exports.getStudentsAndDatabyProfessor = getStudentsAndDatabyProfessor
const Turma = require('../models/turmas').Turma
const Escola = require('../models/escolas').Escola
const Aluno = require('../models/alunos').Aluno
const sequelize = require('../utilities/sequelize').sequelizeConnection
const Sequelize = require('sequelize');
const { Op } = Sequelize;

const getTurmasByProfessor = async (req, res) => {
    const result = [];
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
          const count = await Aluno.count({
            where: {
              turmaId: turma.dataValues.id,
            },
          });
          result.push([turma, count]);
        }
      }
      res.status(200).json(result);
    } catch (err) {
      res.status(400).send(err);
    }
  };

exports.getTurmasByProfessor = getTurmasByProfessor;
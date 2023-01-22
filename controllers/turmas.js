const Turma = require('../models/turmas').Turma

const findTurmas = async (req, res) => {
    Turma.findAll({  where:{
        escolaId: req.params.escolaId
    }, }).then((result) => {
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(400).send('Não foi possivel obter as suas turmas.');
        }
    }).catch((err) => {
        res.status(400).send(err);
    });
}

const getTurmasByProfessor = async (req, res) => {
    const result = []
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
    })
}

exports.findTurmas = findTurmas;
exports.getTurmasByProfessor = getTurmasByProfessor;
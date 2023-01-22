const { get } = require('../routes/turmas');

const Aluno = require('../models/alunos').Aluno


const getAlunosByTurma = async (req, res) => {
    const result = []
    Alunos.findAll({
        where: {
            id: {
                [Op.in]: Sequelize.literal(`(SELECT turmaId FROM turmas WHERE turmaId = ${req.params.turmaId})`)
            }
        }
    }).then((result) => {
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(400).send('Não foi possivel obter os alunos desta turma.');
        }
    }).catch((err) => {
        res.status(400).send(err);
    });
}


exports.getAlunosByTurma = getAlunosByTurma;
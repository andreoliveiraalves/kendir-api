const Aluno = require('../models/alunos').Aluno

const criarAluno = (req, res) => {
    Aluno.findOne({
        where: {
            nome: req.body.nome
            }
    }).then((result) => {
        if (result) {
            res.status(406).send('Aluno já existe')
        }
        else {
            const aluno = new Aluno({
                nome: req.body.nome,
                apelido: req.body.apelido,
                email: req.body.email,
                turmaId : req.body.turmaId,
            })
            aluno.save().then((result) => {
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

const findAlunos = async (req, res) => {
    Aluno.findAll({  where:{
        turmaId: req.params.turmaId
    }, }).then((result) => {
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(400).send('Não foi possivel obter os alunos desta turma.');
        }
    }).catch((err) => {
        res.status(400).send(err);
    });
}


exports.criarAluno = criarAluno;
exports.findAlunos = findAlunos;
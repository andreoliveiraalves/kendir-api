const Turma = require('../models/turmas').Turma

const criarTurma = (req, res) => {
    Turma.findOne({
        where: {
            nome: req.body.nome
            }
    }).then((result) => {
        if (result) {
            res.status(406).send('Turma já existe')
        }
        else {
            const turma = new Turma({
                escolaId: req.body.escolaId,
                nome: req.body.nome,
            })
            turma.save().then((result) => {
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

exports.criarTurma = criarTurma;
exports.findTurmas = findTurmas;
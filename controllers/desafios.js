const Desafio = require('../models/desafios').Desafio

const obterDesafios = (req, res) => {
    Desafio.findAll({
        where:{
            professorId: req.params.professorId
        },
    }).then((result) => {
        if (result) {
            res.status(200).send(result)
        }
        else {
            res.status(400).send('Não foi possivel obter os seus desafios.')
        }
    }).catch((error) => {
        console.log(error)
        res.status(400).send(error)
    })
}

exports.obterDesafios = obterDesafios;
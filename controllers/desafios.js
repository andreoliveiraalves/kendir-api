const Desafio = require('../models/desafios').Desafio

const criarDesafio = (req, res) => {
    Desafio.findOne({
        where: {
        nome: req.body.nome
        }
    }).then((result) => {
        if (result) {
            res.status(406).send('Desafio já existe')
        }
        else {
            const desafio = new Desafio({
                nome: req.body.nome,
                descricao: req.body.descricao,
                tipo: req.body.tipo,
                status: req.body.status,
                professorId: req.body.professorId,
            })
            desafio.save().then((result) => {
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


exports.criarDesafio = criarDesafio;
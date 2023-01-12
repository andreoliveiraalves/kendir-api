const Modulo = require('../models/modulos').Modulo

const criarModulo = (req, res) => {
    Modulo.findOne({
        where: {
            nome: req.body.nome
            }
    }).then((result) => {
        if (result) {
            res.status(406).send('Módulo já existe')
        }
        else {
            const modulo = new Modulo({
                nome: req.body.nome,
                professorId: req.body.professorId,
            })
            modulo.save().then((result) => {
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

exports.criarModulo = criarModulo;
const Escola = require('../models/escolas').Escola

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

exports.criarEscola = criarEscola;
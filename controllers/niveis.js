const Nivel = require('../models/niveis').Nivel

const criarNivel = (req, res) => {
    Nivel.findOne({
        where: {
            nome: req.body.nome
            }
    }).then((result) => {
        if (result) {
            res.status(406).send('Nivel já existe')
        }
        else {
            const nivel = new Nivel({
                nome: req.body.nome,
                recorde: req.body.recorde,
                jogoId: req.body.jogoId
            })
            nivel.save().then((result) => {
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

exports.criarNivel = criarNivel;
const Jogo = require('../models/jogos').Jogo

const criarJogo = (req, res) => {
    Jogo.findOne({
        where: {
            nome: req.body.nome
            }
    }).then((result) => {
        if (result) {
            res.status(406).send('Jogo já existe')
        }
        else {
            const jogo = new Jogo({
                nome: req.body.nome,
                moduloId: req.body.moduloId,
            })
            jogo.save().then((result) => {
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

exports.criarJogo = criarJogo;
const Ronda = require('../models/rondas').Ronda

const criarRonda = (req, res) => {
    const ronda = new Ronda({
                numero_de_partidas: req.body.numero_de_partidas,
                pontuacao: req.body.pontuacao,
                tempo_de_jogo: req.body.tempo_de_jogo,
                total_de_erros: req.body.total_de_erro,
                nivelId: req.body.nivelId,
                alunoId: req.body.alunoId,
        })
        ronda.save().then((result) => {
                res.status(200).json(result)
        }).catch((err) => {
                console.log(err)
                res.status(400).send(err)
        })
}

exports.criarRonda = criarRonda;
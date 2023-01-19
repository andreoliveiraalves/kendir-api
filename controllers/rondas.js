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


// Display list of all users (with pagination)
exports.findAll = async (req, res) => {

        try {
                let rondas = await Ronda.findAndCountAll({ where: condition, offset })

                // map default response to desired response data structure
                res.status(200).json({
                        success: true,
                        totalItems: rondas.count,
                        rondas: rondas.rows,
                        currentPage: page ? page : 0
                });
        }
        catch (err) {
                res.status(500).json({
                        success: false, msg: err.message || "Some error occurred while retrieving the rounds."
                })

        }
};

// List just one user
exports.findOne = async (req, res) => {
        try {
                let ronda = await Ronda.findByPk(req.params.rondaID)

                if (ronda === null)
                        res.status(404).json({
                                success: false, msg: `Cannot find any round with ID ${req.params.rondaID}.`
                        });
                else
                        res.json({ success: true, ronda: ronda });
        }
        catch (err) {
                res.status(500).json({
                        success: false, msg: `Error retrieving round with ID ${req.params.rondaID}.`
                });
        };
};

exports.criarRonda = criarRonda;
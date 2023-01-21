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


exports.criarAluno = criarAluno;
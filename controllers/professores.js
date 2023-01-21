const Professor = require('../models/professores').Professor

const criarProfessor = (req, res) => {
    Professor.findOne({
        where: {
            nome: req.body.nome
        }
    }).then((result) => {
        if (result) {
            res.status(406).send('Desafio já existe')
        }
        else {
            const professor = new Professor({
                nome: req.body.nome,
                apelido: req.body.apelido,
                email: req.body.email,
                password: req.body.password,
            })
            professor.save().then((result) => {
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


const findProfessor = async (req, res) => {
    Professor.findOne({ where: { email: req.params.profEmail , password: req.params.profPass} }).then((result) => {
        if (result) {
            res.status(200).json(result.id);
        } else {
            res.status(404).send('Professor with those credentials not found');
        }
    }).catch((err) => {
        res.status(400).send(err);
    });
}
exports.criarProfessor = criarProfessor
exports.findProfessor = findProfessor
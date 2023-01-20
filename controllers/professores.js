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


// List just one user
const findOne = async (req, res) => {
    Professor.findOne({ where: { email: req.params.profEmail } }).then((result) => {
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).send('not found');
        }
    }).catch((err) => {
        res.status(400).send(err);
    });

    // try {
    //     let professor = await Professor.findOne({ where: { email: req.params.profEmail } })

    //     if (professor === null)
    //         res.status(404).json({
    //             success: false, msg: `Cannot find any user with email ${req.params.profEmail}.`
    //         });
    //     else
    //         res.json({ success: true, professor: professor });
    // }
    // catch (err) {
    //     res.status(500).json({
    //         success: false, msg: `Catch error. email: ${req.params.profEmail}.`
    //     });
    // };
};

exports.criarProfessor = criarProfessor
exports.findOne = findOne
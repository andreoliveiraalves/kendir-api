const Professor = require('../models/professores').Professor



const findProfessor = async (req, res) => {
    Professor.findOne({ where: { email: req.body.profEmail , password: req.body.profPass} }).then((result) => {
        if (result) {
            res.status(200).json(result.id);
        } else {
            res.status(404).send('Professor with those credentials not found');
        }
    }).catch((err) => {
        res.status(400).send(err);
    });
}
exports.findProfessor = findProfessor
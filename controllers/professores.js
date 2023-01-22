const Professor = require('../models/professores').Professor
const utilities = require('../utilities/jwt')



const findProfessor = async (req, res) => {
    Professor.findOne({ where: { email: req.params.profEmail , password: req.params.profPass} }).then((result) => {
        if (result) {
            const userId = result.id
            res.status(200).json(userId);
        } else {
            res.status(404).send('Professor with those credentials not found');
        }
    }).catch((err) => {
        res.status(400).send(err);
    });
}
exports.findProfessor = findProfessor
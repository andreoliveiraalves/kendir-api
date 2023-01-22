require('dotenv').config()
const Professor = require('../models/professores').Professor
const utilities = require('../utilities/jwt')



const findProfessor = async (req, res) => {
    Professor.findOne({ where: { email: req.body.email , password: req.body.password} }).then(( async result => {
        if (result) {
           await utilities.generateToken({ id: result.id , email: result.email , password: result.password }, (token) => {
                res.status(200).json(token);
            })
        } else {
            res.status(404).send('Professor with those credentials not found');
        }
    })).catch((err) => {
        res.status(400).send(err);
    });
}
exports.findProfessor = findProfessor
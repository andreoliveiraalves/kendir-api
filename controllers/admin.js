const admin = require("../models/admin").Admin;
const bcrypt = require('bcrypt');
const utilities = require('../utilities/jwt')

const login = (req, res) => {

    admin.find({nome: req.body.nome}, function (err, admin) {
        if (err) {
            res.status(400).send(err); 
        }
        if(user.length > 0) {
            bcrypt.compare(req.body.password, admin[0].password).then(function(result) {
                if(result) {
                    utilities.generateToken({admin: req.body.nome}, (token) => {
                        res.status(200).json(token); 
                    })
                } else {
                    res.status(401).send("Não autorizado"); 
                }
            });
        } else {
            res.status(401).send("Não autorizado"); 
        }
       
    })
} 

const registo = (req, res) => {
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(req.body.password, salt, function(err, hash) {
            
            const adminToCreate = new admin({ nome: req.body.nome, password: hash });

            admin.find({nome: req.body.nome}, function (err, nome) {
                if (err) {
                    res.status(400).send(err); 
                }
        
                if(nome.length > 0) {
                    res.status(406).send("Administrador já existe"); 
                } else {
                    adminToCreate.save(function (err, newAdmin) {
                        if (err) {
                            res.status(400).send(err); 
                        }
                        res.status(200).send("Administrador Registado"); 
                    })
                }
            })
        });
    });
} 

exports.login = login
exports.registo = registo
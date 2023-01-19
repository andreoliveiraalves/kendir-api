const express = require('express');
const router = express.Router()
const desafiocontroller = require('../controllers/desafios')

/*router.route('/desafios').post( (req,res) => {
    desafiocontroller.criarDesafio(req, res);
    desafiocontroller.findAll(req, res);
})*/
router.route('/desafios')
    .get(desafiocontroller.findAll)
    .post(desafiocontroller.criarDesafio)
    
router.route('/desafioID')
    .get(desafiocontroller.findOne)

module.exports = router;
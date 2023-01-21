const express = require('express');
const router = express.Router()
const desafiocontroller = require('../controllers/desafios')

/*router.route('/desafios').post( (req,res) => {
    desafiocontroller.criarDesafio(req, res);
    desafiocontroller.findAll(req, res);
})*/
router.route('/desafios')
    .post(desafiocontroller.criarDesafio)

router.get('/:professorId', function(req, res) {
    desafiocontroller.obterDesafios(req, res)
})

module.exports = router;
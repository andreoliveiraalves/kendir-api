const express = require('express');
const router = express.Router()
const jogocontroller = require('../controllers/jogos')

/*router.route('/jogos').post( (req,res) => {
    jogocontroller.criarJogo(req, res);
    jogocontroller.findAll(req, res);
})*/
router.route('jogos')
    .get(jogocontroller.findAll)
    .post(jogocontroller.criarJogo)
    
router.route('/jogoID')
    .get(jogocontroller.findOne)

module.exports = router;
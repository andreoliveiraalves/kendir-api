const express = require('express');
const router = express.Router()
const nivelcontroller = require('../controllers/niveis')

/*router.route('/niveis').post( (req,res) => {
    nivelcontroller.criarNivel(req, res);
    nivelcontroller.findAll(req, res);
})*/
router.route('/niveis')
    .post(nivelcontroller.criarNivel)

module.exports = router;
const express = require('express');
const router = express.Router()
const nivelcontroller = require('../controllers/niveis')

/*router.route('/niveis').post( (req,res) => {
    nivelcontroller.criarNivel(req, res);
    nivelcontroller.findAll(req, res);
})*/
router.route('/niveis')
    .get(nivelcontroller.findAll)
    .post(nivelcontroller.criarNivel)
    
router.route('/nivelID')
    .get(nivelcontroller.findOne)


module.exports = router;
const express = require('express');
const router = express.Router()
const modulocontroller = require('../controllers/modulos')

/*router.route('/modulos').post( (req,res) => {
    modulocontroller.criarModulo(req, res);
    modulocontroller.findAll(req, res);
})*/
router.route('modulos')
    .get(modulocontroller.findAll)
    .post(modulocontroller.criarModulo)
router.route('/moduloID')
    .get(modulocontroller.findOne)

module.exports = router;
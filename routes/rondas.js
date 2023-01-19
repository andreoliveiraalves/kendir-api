const express = require('express');
const router = express.Router()
const rondacontroller = require('../controllers/rondas')

/*router.route('/rondas').post( (req,res) => {
    rondacontroller.criarRonda(req, res);
    rondacontroller.findAll(req, res);
})*/
router.route('/rondas')
    .get(rondacontroller.findAll)
    .post(rondacontroller.criarRonda)
router.route('/rondaID')
    .get(rondacontroller.findOne)
    
module.exports = router;
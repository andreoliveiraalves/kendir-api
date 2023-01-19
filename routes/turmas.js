const express = require('express');
const router = express.Router()
const turmacontroller = require('../controllers/turmas')

/*router.route('/turmas').post( (req,res) => {
    turmacontroller.criarTurma(req, res);
    turmacontroller.findAll(req, res);
})*/
router.route('/turmas')
    .get(turmacontroller.findAll)
    .post(turmacontroller.criarTurma)
    
router.route('/turmaID')
    .get(turmacontroller.findOne)
module.exports = router;
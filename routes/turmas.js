const express = require('express');
const router = express.Router()
const turmacontroller = require('../controllers/turmas')

router.route('/turmas')
    .post(turmacontroller.criarTurma)
    
router.get('/:escolaId', function(req, res) {
    turmacontroller.findTurmas(req, res)
})
module.exports = router;
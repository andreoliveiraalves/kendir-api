const express = require('express');
const router = express.Router()
const turmacontroller = require('../controllers/turmas')

router.route('/turmas')
    .post(turmacontroller.criarTurma)
    
module.exports = router;
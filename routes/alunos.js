const express = require('express');
const router = express.Router()
const alunoController = require('../controllers/alunos')

router.get('/:turmaId', function(req, res) {
    alunoController.getAlunosByTurma(req, res)
})

module.exports = router;
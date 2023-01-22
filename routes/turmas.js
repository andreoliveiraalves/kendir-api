const express = require('express');
const router = express.Router()
const turmacontroller = require('../controllers/turmas')
  
router.get('/:escolaId', function(req, res) {
    turmacontroller.findTurmas(req, res)
})
router.get('/:professorId', function(req, res) {
    turmacontroller.getTurmasByProfessor(req, res)
})

module.exports = router;
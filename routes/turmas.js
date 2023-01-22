const express = require('express');
const router = express.Router()
const turmacontroller = require('../controllers/turmas')
  

router.get('/:professorId', function(req, res) {
    turmacontroller.getTurmasByProfessor(req, res)
})

module.exports = router;
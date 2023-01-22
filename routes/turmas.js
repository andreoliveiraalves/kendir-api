const express = require('express');
const router = express.Router()
const turmacontroller = require('../controllers/turmas')
  
/**
 * @route GET /turmas/{professorId}
 * @group Turmas e alunos associados a cada turma
 * @param {object}  professorId.path  - Professor ID - eg. {"professorId":"1"} 
 * @returns {object} 200 - Array of objects [{{Turma},alunos.count},...]
 * @returns {Error} 400 - Unexpected error
 * @returns {Error} 401 - Invalid Token
 * @security Bearer
 */


router.get('/:professorId', function(req, res) {
    turmacontroller.getTurmasByProfessor(req, res)
})

module.exports = router;
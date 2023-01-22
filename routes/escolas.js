const express = require('express');
const router = express.Router()
const escolacontroller = require('../controllers/escolas')

/**
 * @route GET /escolas/{professorId}
 * @group Escolas e número de alunos de um professor numa determinada escola
 * @param {object}  professorId.path  - Professor ID - eg. {"professorId":"1"} 
 * @returns {object} 200 - Array of objects [{{Escola},alunos.count},...]
 * @returns {Error} 400 - Unexpected error
 * @returns {Error} 401 - Invalid Token
 * @security Bearer
 */

router.get('/:professorId', function(req, res) {
    escolacontroller.getSchoolsByProfessor(req, res)
    })

module.exports = router;
const express = require('express');
const router = express.Router()
const alunoscontroller = require('../controllers/alunos')

/**
 * @route GET /alunos/{professorId}
 * @group Listar alunos e dados das rondas
 * @param {object} professorId.path - Professor ID - eg. {"professorId":"2",} 
 * @returns {object} 200 - Alunos + Rondas
 * @returns {Error} 400 - Unexpected error
 * @returns {Error} 401 - Invalid Token
 * @security Bearer
 */

router.get('/:professorId', function(req, res) {
    alunoscontroller.getStudentsAndDatabyProfessor(req, res)
})

module.exports = router;
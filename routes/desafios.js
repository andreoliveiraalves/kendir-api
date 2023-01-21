const express = require('express');
const router = express.Router()
const desafiocontroller = require('../controllers/desafios')

/**
 * @route GET /professores/{professorId}
 * @group Obter Desafios para professor
 * @param {object} professorId.path - Professor ID - eg. {"professorId":"2",} 
 * @returns {object} 200 - Desafios
 * @returns {Error} 400 - Unexpected error
 */

router.get('/:professorId', function(req, res) {
    desafiocontroller.obterDesafios(req, res)
})

module.exports = router;
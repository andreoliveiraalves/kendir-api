const express = require('express');
const router = express.Router()
const moduloscontroller = require('../controllers/modulos')

/**
 * @route GET /modulos/{professorId}
 * @group Obter Dados de partidas de cada módulo
 * @param {object} professorId.path - Professor ID - eg. {"professorId":"2",} 
 * @returns {object} 200 - [{Modulo},[{rondas}...]...]
 * @returns {Error} 400 - Unexpected error
 * @returns {Error} 401 - Invalid Token
 * @security Bearer
 */

router.get('/:professorId', function(req, res) {
    moduloscontroller.getModulosData(req, res)
})



module.exports = router;
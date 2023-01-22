const express = require('express');
const router = express.Router()
const professorcontroller = require('../controllers/professores')


/**
 * @route GET /professores/
 * @group Login Professor
 * @param {object} object.body - User's Credentials - eg. {"email":"joaop@jregio.com", "password": "fDWQ8d218dD1"} 
 * @returns {object} 200 - Bearer Token
 * @returns {Error} 400 - Unexpected error
 */

router.get('/', function(req, res) {
    professorcontroller.findProfessor(req, res)
})

module.exports = router;
const { validationResult } = require('express-validator');
const express = require('express');
const router = express.Router()
const professorcontroller = require('../controllers/professores')

router.route('/professores').post( (req,res) => {
    professorcontroller.criarProfessor(req, res);
})


router.get('/:profEmail/:profPass', function(req, res) {
    professorcontroller.findProfessor(req, res)
})

module.exports = router;
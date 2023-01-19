const express = require('express');
const router = express.Router()
const professorcontroller = require('../controllers/professores')

/*router.route('/professores').post( (req,res) => {
    professorcontroller.criarProfessor(req, res);
    professorcontroller.findAll(req, res);
})*/
router.route('/professores')
    .get(professorcontroller.findAll)
    .post(professorcontroller.criarProfessor)
    
router.route('/professorID')
    .get(professorcontroller.findOne)

module.exports = router;
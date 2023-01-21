const express = require('express');
const router = express.Router()
const escolacontroller = require('../controllers/escolas')

/*router.route('/escolas').post( (req,res) => {
    escolacontroller.criarEscola(req, res);
    escolacontroller.findAll(req, res);
})*/
router.route('escolas')
    .post(escolacontroller.criarEscola)

router.get('/:professorId', function(req, res) {
    escolacontroller.getSchoolsByProfessor(req, res)
    })

module.exports = router;
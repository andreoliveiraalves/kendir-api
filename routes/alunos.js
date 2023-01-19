const express = require('express');
const router = express.Router()
const alunoController = require('../controllers/alunos')

/*router.route('/alunos').post( (req,res) => {
    alunoController.criarAluno(req, res);
})*/
router.route('/alunos')
    .get(alunoController.findAll)
    .post(alunoController.criarAluno)

router.route('/alunoID')
    .get(alunoController.findOne)

module.exports = router;
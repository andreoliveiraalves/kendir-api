const express = require('express');
const router = express.Router()
const alunoController = require('../controllers/alunos')

/*router.route('/alunos').post( (req,res) => {
    alunoController.criarAluno(req, res);
})*/
router.route('/alunos')
    .post(alunoController.criarAluno)

module.exports = router;
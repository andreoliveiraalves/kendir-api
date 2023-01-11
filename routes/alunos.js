const express = require('express');
const router = express.Router()
const controller = require('../controllers/alunos')

router.route('/').post( (req,res) => {
    controller.criarAluno(req, res);
})

module.exports = router;
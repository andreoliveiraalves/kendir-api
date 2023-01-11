const express = require('express');
const router = express.Router()
const controller = require('../controllers/professores')

router.route('/').post( (req,res) => {
    controller.criarProfessor(req, res);
})

module.exports = router;
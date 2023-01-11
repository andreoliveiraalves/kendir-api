const express = require('express');
const router = express.Router()
const controller = require('../controllers/turmas')

router.route('/').post( (req,res) => {
    controller.criarTurma(req, res);
})

module.exports = router;
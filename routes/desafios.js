const express = require('express');
const router = express.Router()
const controller = require('../controllers/desafios')

router.route('/').post( (req,res) => {
    controller.criarDesafio(req, res);
})

module.exports = router;
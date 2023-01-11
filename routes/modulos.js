const express = require('express');
const router = express.Router()
const controller = require('../controllers/modulos')

router.route('/').post( (req,res) => {
    controller.criarModulo(req, res);
})

module.exports = router;
const express = require('express');
const router = express.Router()
const controller = require('../controllers/niveis')

router.route('/').post( (req,res) => {
    controller.criarNivel(req, res);
})

module.exports = router;
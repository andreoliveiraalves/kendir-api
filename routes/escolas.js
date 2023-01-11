const express = require('express');
const router = express.Router()
const controller = require('../controllers/escolas')

router.route('/').post( (req,res) => {
    controller.criarEscola(req, res);
})

module.exports = router;
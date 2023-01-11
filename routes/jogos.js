const express = require('express');
const router = express.Router()
const controller = require('../controllers/jogos')

router.route('/').post( (req,res) => {
    controller.criarJogo(req, res);
})

module.exports = router;
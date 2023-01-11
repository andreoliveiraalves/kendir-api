const express = require('express');
const router = express.Router()
const controller = require('../controllers/rondas')

router.route('/').post( (req,res) => {
    controller.criarRondas(req, res);
})

module.exports = router;
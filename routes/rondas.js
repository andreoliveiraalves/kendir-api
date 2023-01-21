const express = require('express');
const router = express.Router()
const rondacontroller = require('../controllers/rondas')


router.route('/rondas')
    .post(rondacontroller.criarRonda)
    
module.exports = router;
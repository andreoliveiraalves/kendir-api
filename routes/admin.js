const express = require('express')
const router = express.Router();
const controller = require('../controllers/admin')
const { validationResult, body } = require('express-validator')


router.post('/login',  function (req, res) {
    controller.login(req, res); 
})

router.post('/register', [
    body('mome').notEmpty().escape(), 
    body('password').notEmpty().escape()
],  function (req, res) {
    const errors = validationResult(req); 
    if (errors.isEmpty()) {
        controller.register(req, res); 
    } else {
        res.status(404).json({errors: errors.array()})
    }
})

module.exports = router
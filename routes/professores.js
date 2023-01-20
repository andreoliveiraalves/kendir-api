const { validationResult } = require('express-validator');
const express = require('express');
const router = express.Router()
const professorcontroller = require('../controllers/professores')

/*router.route('/professores').post( (req,res) => {
    professorcontroller.criarProfessor(req, res);
    professorcontroller.findAll(req, res);
})*/


// router.get('/:profEmail', [
//     param('profEmail').notEmpty().escape(),
// ], function (req, res) {
//     const errors = validationResult(req);
//     if (errors.isEmpty()) {
//         professorcontroller.findOne(req, res);
//     } else {
//         res.status(404).json({ errors: errors.array() })
//     }
// })

router.get('/:profEmail/:profPass', function(req, res) {
    professorcontroller.findOne(req, res)
})

module.exports = router;
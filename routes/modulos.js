const express = require('express');
const router = express.Router()
const moduloscontroller = require('../controllers/modulos')
  
router.get('/:professorId', function(req, res) {
    moduloscontroller.getModulosData(req, res)
})



module.exports = router;
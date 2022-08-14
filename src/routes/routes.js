const { Router } = require('express')

const router = Router()
const alumno = require('../routes/alumnos.router')

router.use('/alumno', alumno)

module.exports = router
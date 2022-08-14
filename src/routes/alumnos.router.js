const { Router } = require('express')

const router = Router()
const alumno = require('../controller/alumno')

router.get('/', alumno.obterAlumno)
router.delete('/:id', alumno.eliminarAlumno)
router.get('/:id', alumno.alumnoById)
router.put('/:id', alumno.alumnoUpdate)
router.post('/', alumno.crearAlumno)

module.exports = router


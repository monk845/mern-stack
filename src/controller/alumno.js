const { response } = require('express')
const Alumno = require('../model/alumno')

const crearAlumno = async (req, res = response) => {
    try {
        const alummno = req.body;
        const guardar = new Alumno(alummno)
        guardar.save();

        return res.status(200).json({
            status: 200,
            message: 'Registro creado con exito'
        })

    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: 'Upps ha ocurrido un error del lado del sevidor'
        })
    }
}

const obterAlumno = async (req, res = response) => {
    try {

        const alumno = await Alumno.find()

        return res.status(200).json({
            status: 200,
            data: alumno,
            message: 'Listado de alumnos con exito!'

        })
    } catch (error) {
        return res.status(500).json({
            stastus: 500,
            message: 'Upps ha ocurrido un error en el servidor'
        })
    }

}

//Eliminar  registro por id
const eliminarAlumno = async (req, res = response) => {

    try {
        const { id } = req.params;

        await Alumno.deleteOne({
            _id: id
        })

        return res.status(200).json({
            status: 200,
            message: 'Registro eliminado con exito'
        })
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: 'Upps ha ocurriod un error del lado del servidor!'
        })
    }
}

const alumnoById = async (req, res = response) => {

    try {
        const { id } = req.params;
        const alumno = await Alumno.findById(id)
        return res.status(200).json({
            status: 200,
            data: alumno,
            message: 'Registro mostrado por id'
        })
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: 'Upps ha ocurriod un error del lado del servidor!'
        })
    }
}

const alumnoUpdate = async (req, res = response) => {

    try {

        const { id } = req.params;
        const update = req.body;
        await Alumno.updateOne({ _id: id }, update)

        return res.status(200).json({
            status: 200,
            message: 'Registro actualizado con exito'
        })
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: 'Upps ha ocurriod un error del lado del servidor!'
        })
    }

}

module.exports = {
    crearAlumno,
    alumnoById,
    obterAlumno,
    eliminarAlumno,
    alumnoUpdate
}
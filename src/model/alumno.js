const { Schema, default: mongoose } = require('mongoose');

const schemaAlumno = new Schema({
    nombre:
    {
        type: String,
        required: true
    },

    apellido: {
        type: String,
        required: true
    },

    carnet: {
        type: String,
        required: true
    },

    carrera: {
        type: String,
        required: true
    },
    
    correo: {
    type: String,
        required: true
}

});

module.exports = mongoose.model('Alumno', schemaAlumno);
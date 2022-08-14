const { connect } = require('mongoose')
const colors = require('colors')

const conn = async () => {

    try {

        await connect(process.env.URI, {

            UseNewUrlParser: true,
        })

        console.log(colors.yellow('Conexion a la base de datos con exito'))

    } catch (error) {

        console.log(colors.red('Error al conectar a la bade de dato!', error))
    }

};

module.exports = {
    conn,
}
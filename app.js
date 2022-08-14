const express = require('express');
const colors = require('colors');
const morgan = require('morgan')
const { conn } = require('./src/config/databaseConfig');
const router = require('./src/routes/routes')


require('dotenv').config();
const app = express();
app.use(morgan('dev'))

//Middleware
app.use(express.json())
app.use('/api', router)

conn();
const port = process.env.PORT || 3000

app.listen(port, () => {

    try {

        console.log(colors.blue(`Server listening successfully on port http://localhost:${port}`))

    } catch (error) {

        console.log(colors.red('Failed to listen on server port:', error))

    }
})
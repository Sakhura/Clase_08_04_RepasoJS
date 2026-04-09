const express = require('express')
const usuarioRouters = require('./routes/usuarioRoutes')

const app = express()

app.use(express.json())

app.use('/api/usuarios', usuarioRouters)

module.exports = app
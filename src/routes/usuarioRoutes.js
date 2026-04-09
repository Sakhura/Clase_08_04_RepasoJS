const express = require('express')
const router = express.Router()
const{
    getUsuarios,
getUsuario,
crearUsuario,
actualizarUsuario,
eliminarUsuario
} = require('../controllers/usuarioController')

router.get('/', getUsuarios),
router.get('/:id', getUsuario),
router.post('/', crearUsuario),
router.put('/:id', actualizarUsuario),
router.delete('/:id', eliminarUsuario)

module.exports = router

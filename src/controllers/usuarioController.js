const Usuario = requeride('../models/Usuario')

//Obtener usuarios
const getUsuarios = async (req, res)=>{
    try {
        const usuarios = await Usuario.findAll()
        res.json(usuarios)
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener usuarios'})        
    }
}
//Obtener usuarios por ID
const getUsuario = async (req, res)=>{
    try {
        const usuario = await Usuario.findByPk(req.params.id)
        if (!Usuario){
            return res.status(404).json({ error: 'Usuario no encontrado'})
        }
        res.json(usuario)
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener usuario'})        
    }
}

// Crear un usuario
const crearUsuario = async (req, res) => {
  try {
    const { nombre, email, edad } = req.body
    const usuario = await Usuario.create({ nombre, email, edad })
    res.status(201).json(usuario)
  } catch (error) {
    res.status(500).json({ error: 'Error al crear usuario' })
  }
}

// Actualizar un usuario
const actualizarUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id)

    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' })
    }

    await usuario.update(req.body)
    res.json(usuario)
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar usuario' })
  }
}

// Eliminar un usuario
const eliminarUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id)

    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' })
    }

    await usuario.destroy()
    res.json({ mensaje: 'Usuario eliminado correctamente' })
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar usuario' })
  }
}

module.exports ={
getUsuarios,
getUsuario,
crearUsuario,
actualizarUsuario,
eliminarUsuario
}
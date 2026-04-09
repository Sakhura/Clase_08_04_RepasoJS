require('dotenv').config()
const app = require('./src/app')
const { conectar, sequelize } = require('./src/config/database')

const PORT = process.env.PORT || 3000

const iniciar = async () => {
    //1 conectar a la BD
    await conectar()
    //2. sincronizar el modelo
    await sequelize.sync({ force: false })
    console.log('Tablas Sincronizadas')

    //3 levantar el servidor
    app.listen(PORT, () =>{
        console.log(`Servidor corriendo en http://localhost:${PORT}`)
    })
}

iniciar()
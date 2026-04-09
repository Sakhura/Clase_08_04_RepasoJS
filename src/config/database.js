//configurar la conexion a base
const { Sequelize } = require('sequelize')
require('dotenv').config()

const sequelize = new Sequelize({
    dialect : 'sqlite',
    storage: process.env.DB_STORAGE, // archivo donde se gusrada la BD
    logging: false //true ver el SQL generado
})

//funciones para probar la conexion
const conectar = async ()=>{
    try{
        await sequelize.authenticate()
        console.log('Conexion a la BD exitosa')
    }catch(error){
        console.error('Error al conectgar con la BD:' , error)
    }
}

module.exports = {
    sequelize,
    conectar
}
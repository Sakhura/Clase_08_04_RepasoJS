const { Datatypes } = require('sequelize')
const { sequelize } = require('../config/database')

const Usuario = sequelize.define('Usuario', {
    //Sequelize genere un id automatico
    nombre:{
        type: Datatypes.STRING,
        allowNull: false // esto indica que el campo nombre es obligatorio 
    },
    email:{
        type: Datatypes.STRING,
        allowNull: false ,
        unique:true // no se puede repetir
    },
    edad:{
        type: Datatypes.INTEGER,
        allowNull: false
    }
})
module.exports= Usuario
const { DataTypes } = require('sequelize')
const { sequelize } = require('../config/database')

const Usuario = sequelize.define('Usuario', {
    //Sequelize genere un id automatico
    nombre:{
        type: DataTypes.STRING,
        allowNull: false // esto indica que el campo nombre es obligatorio 
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false ,
        unique:true // no se puede repetir
    },
    edad:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
})
module.exports= Usuario
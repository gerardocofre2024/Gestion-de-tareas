const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('gestion_tareas', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

const Usuario = sequelize.define('Usuario', {
    nombre_usuario: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    contraseña: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nombre_completo: DataTypes.STRING,
    rol: {
        type: DataTypes.ENUM('Usuario', 'Administrador'),
        defaultValue: 'Usuario'
    }
}, {
    timestamps: false
});

module.exports = Usuario;
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('gestion_tareas', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

const Tarea = sequelize.define('Tarea', {
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: DataTypes.TEXT,
    asignado_a: DataTypes.STRING,
    estado: {
        type: DataTypes.ENUM('Pendiente', 'En Progreso', 'Completado'),
        defaultValue: 'Pendiente'
    }
}, {
    timestamps: false
});

const Informe = sequelize.define('Informe', {
    nombre_proyecto: DataTypes.STRING,
    progreso: DataTypes.INTEGER,
}, {
    timestamps: false
});

module.exports = { Tarea, Informe };
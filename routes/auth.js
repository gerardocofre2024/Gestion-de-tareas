const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const Usuario = require('../models/usuario');

// Registro de Usuario
router.get('/registro', (req, res) => {
    res.render('registro');
});

router.post('/registro', async (req, res) => {
    const { nombre_usuario, contraseña, nombre_completo } = req.body;
    const hashedPassword = await bcrypt.hash(contraseña, 10);
    await Usuario.create({ nombre_usuario, contraseña: hashedPassword, nombre_completo });
    res.redirect('/auth/login');
});

// Inicio de Sesión
router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/login', async (req, res) => {
    const { nombre_usuario, contraseña } = req.body;
    const usuario = await Usuario.findOne({ where: { nombre_usuario } });

    if (usuario && await bcrypt.compare(contraseña, usuario.contraseña)) {
        req.session.usuarioId = usuario.id;
        req.session.nombre_usuario = usuario.nombre_usuario;
        req.session.rol = usuario.rol;
        res.redirect('/');
    } else {
        res.render('login', { error: 'Usuario o contraseña incorrectos' });
    }
});

// Cierre de Sesión
router.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/auth/login');
});

module.exports = router;
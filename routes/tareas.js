const express = require('express');
const router = express.Router();
const { Tarea } = require('../models/tarea');
const isAuthenticated = require('../middleware/auth');

router.get('/',isAuthenticated, async (req, res) => {
    const tareas = await Tarea.findAll();
    res.render('tareas', { tareas });
});

router.post('/crear',isAuthenticated, async (req, res) => {
    const { titulo, descripcion, asignado_a } = req.body;
    await Tarea.create({ titulo, descripcion, asignado_a });
    res.redirect('/tareas');
});

router.post('/actualizar/:id',isAuthenticated, async (req, res) => {
    const { id } = req.params;
    const { estado } = req.body;
    await Tarea.update({ estado }, { where: { id } });
    res.redirect('/tareas');
});

module.exports = router;
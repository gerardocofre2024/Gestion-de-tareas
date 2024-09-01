const express = require('express');
const router = express.Router();
const { Informe } = require('../models/informe');
const isAuthenticated = require('../middleware/auth');

router.get('/', isAuthenticated, async (req, res) => {
    const informes = await Informe.findAll();
    res.render('informe', { informes });
});

router.post('/generar', isAuthenticated, async (req, res) => {
    const { nombre_proyecto, progreso } = req.body;
    await Informe.create({ nombre_proyecto, progreso });
    res.redirect('/informes');
});

module.exports = router;
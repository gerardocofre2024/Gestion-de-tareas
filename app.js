const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const bcrypt = require('bcrypt');
const app = express();
const Usuario = require('./models/usuario');
const indexRoutes = require('./routes/index');
const tareasRoutes = require('./routes/tareas');
const informesRoutes = require('./routes/informes');
const authRoutes = require('./routes/auth');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(session({
    secret: 'mi_secreto', // Cambia esto por un secreto fuerte
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.use('/', indexRoutes);
app.use('/tareas', tareasRoutes);
app.use('/informes', informesRoutes);
app.use('/auth', authRoutes);

app.listen(3000, () => {
    console.log('Servidor iniciado en http://localhost:3000');
});
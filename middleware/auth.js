module.exports = (req, res, next) => {
    if (req.session.usuarioId) {
        next();
    } else {
        res.redirect('/auth/login');
    }
};
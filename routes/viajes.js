var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/viajes-disponibles/', function(req, res, next) {
  res.render('viajesDisponibles.ejs', { title: 'Express' });
});

router.get('/viajes-disponibles/viaje-detalle/', function(req, res, next) {
  res.render('viajeDetalle.ejs', { title: 'Express' });
});
module.exports = router;

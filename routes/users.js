var express = require('express');
var router = express.Router();
let db=require("../database/models")


/* GET users listing. */
router.get('/register', function (req, res, next) {
  res.render("register");
});
router.post('/register', function (req, res, next) {
  console.log(req.body);
  let row = {
    nombre: req.body.nombre,
    password: req.body.password,
    edad: req.body.edad,
    apellido: req.body.apellido,
    descripcion: req.body.descripcion,
    dni: req.body.dni,
  }
  db.Usuario.create(row);
  res.redirect("/");
});

router.get('/login/', function (req, res, next) {
  res.render("login.ejs");
});
module.exports = router;

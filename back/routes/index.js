const express = require("express");
const router = express.Router();

const productos = require("./productos")
const categoria = require("./categoria")
const localidad = require("./localidad")
const talle = require ("./talle")
const usuario = require ("./usuario")

router.use("/productos", productos );
router.use("/categoria", categoria);
router.use("/talle", talle);
router.use("/localidad", localidad);
router.use("/usuario", usuario);

module.exports = router;
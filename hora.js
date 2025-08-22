const express = require('express');
const router = express.Router();

// GET /hora - Devuelve la hora actual del servidor
router.get('/hora', (req, res) => {
  const ahora = new Date();
  const hora = ahora.toLocaleTimeString('es-AR', { hour12: false });
  const dia = ahora.getDate();
  const mes = ahora.getMonth() + 1; // Los meses van de 0 a 11
  const anio = ahora.getFullYear();
  res.json({ hora, dia, mes, anio });
});

module.exports = router;

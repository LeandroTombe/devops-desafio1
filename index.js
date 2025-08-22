const express = require("express");
const app = express();
const PORT = 3000;

// Importar el router de hora
const horaRouter = require("./hora");

// Middleware para leer JSON en requests
app.use(express.json());

// Usar el router de hora
app.use(horaRouter);

// Ruta de inicio
app.get("/", (req, res) => {
  res.send("Bienvenido a mi API 🚀");
});

// Obtener lista de usuarios (ejemplo)
app.get("/usuarios", (req, res) => {
  res.json([
    { id: 1, nombre: "Agus" },
    { id: 2, nombre: "Leandro" },
  ]);
});

// Crear usuario
app.post("/usuarios", (req, res) => {
  const nuevoUsuario = req.body;
  res.status(201).json({ mensaje: "Usuario creado", usuario: nuevoUsuario });
});

// Ruta con parámetro dinámico
app.get("/usuarios/:id", (req, res) => {
  const { id } = req.params;
  res.json({ id, nombre: "Usuario de prueba" });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

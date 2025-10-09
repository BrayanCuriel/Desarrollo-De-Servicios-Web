// SRC/router/users.routes.js
const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users.controllers");

//Filtrar usuarios
router.get("/filter", (req, res) => {
  const result = usersController.filterUser(req.query);
  res.json(result);
});

//Obtener todos los usuarios
router.get("/", (req, res) => {
  const data = usersController.findAll();
  res.json(data);
});

//Obtener usuario por ID
router.get("/:id", (req, res) => {
  const user = usersController.findById(req.params.id);
  if (!user) return res.status(404).json({ error: "Usuario no encontrado" });
  res.json(user);
});

//Agregar usuario
router.post("/", (req, res) => {
  const user = usersController.addUser(req.body);
  res.status(201).json(user);
});

//Actualizar usuario
router.put("/:id", (req, res) => {
  const updated = usersController.updateUser(req.params.id, req.body);
  if (!updated) return res.status(404).json({ error: "Usuario no encontrado" });
  res.json(updated);
});

//Generar o regenerar API key
router.post("/:id/generate-key", (req, res) => {
  const newKey = usersController.regenerateApiKey(req.params.id);
  if (!newKey) return res.status(404).json({ error: "Usuario no encontrado" });
  res.json({ message: "API Key generada correctamente", apiKey: newKey });
});

module.exports = router;

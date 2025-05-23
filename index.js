const express = require("express");
const {
  getContacts,
  getContactById,
  getGenders,
} = require("./services/monica");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/contacts", async (req, res) => {
  try {
    const contacts = await getContacts();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener contactos" });
  }
});

app.get("/contacts/:id", async (req, res) => {
  try {
    const contact = await getContactById(req.params.id);
    res.json(contact);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el contacto" });
  }
});

app.get("/genders", async (req, res) => {
  try {
    const genders = await getGenders();
    res.json(genders);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los generos" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

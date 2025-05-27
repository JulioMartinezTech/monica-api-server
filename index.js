const express = require("express");
const cors = require("cors");
const {
  getGenders,
  getCountries,
  createContact,
  createContactField,
  createTag,
  createAddress,
  createCompany,
  createOccupation,
  createDocument,
} = require("./services/monica");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

const allowedOrigins = [
  "https://crm-form.netlify.app",
  "http://localhost:5173",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) {
        //Allow request without 'Origin' like Postman or curl
        return callback(null, true);
      }
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("You shall not pass"));
      }
    },
  })
);

app.use(express.json());

//get request

app.get("/genders", async (req, res) => {
  try {
    const genders = await getGenders();
    res.json(genders);
  } catch (error) {
    res.status(500).json({ error: "Error to get genders" });
  }
});

app.get("/countries", async (req, res) => {
  try {
    const countries = await getCountries();
    res.json(countries);
  } catch (error) {
    res.status(500).json({ error: "Error to get countries" });
  }
});

//post request

app.post("/contact", async (req, res) => {
  try {
    const body = req.body;
    const response = await createContact(body);
    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ error: "Error when creating contact" });
  }
});
app.post("/contactfields", async (req, res) => {
  try {
    const body = req.body;
    const response = await createContactField(body);
    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ error: "Error when creating contact's fields" });
  }
});
app.post("/tags", async (req, res) => {
  try {
    const body = req.body;
    const response = await createTag(body);
    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ error: "Error when creating tag" });
  }
});
app.post("/associateTag", async (req, res) => {
  try {
    const body = req.body;
    const response = await createAssociateTag(body);
    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ error: "Error when creating associate tag" });
  }
});
app.post("/address", async (req, res) => {
  try {
    const body = req.body;
    const response = await createAddress(body);
    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ error: "Error when creating address" });
  }
});
app.post("/company", async (req, res) => {
  try {
    const body = req.body;
    const response = await createCompany(body);
    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ error: "Error when creating company" });
  }
});
app.post("/occupation", async (req, res) => {
  try {
    const body = req.body;
    const response = await createOccupation(body);
    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ error: "Error when creating the occupation" });
  }
});
app.post("/document", async (req, res) => {
  try {
    const body = req.body;
    const response = await createDocument(body);
    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ error: "Error when creating document" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

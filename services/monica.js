const axios = require("axios");
require("dotenv").config();

const monicaAPI = axios.create({
  baseURL: process.env.MONICA_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.MONICA_API_TOKEN}`,
    Accept: "application/json",
  },
});

module.exports = {
  getContacts: async () => {
    const response = await monicaAPI.get("/contacts");
    return response.data;
  },

  getContactById: async (id) => {
    const response = await monicaAPI.get(`/contacts/${id}`);
    return response.data;
  },

  getGenders: async () => {
    const response = await monicaAPI.get("/genders");
    return response.data;
  },

  // Puedes agregar más métodos como createContact, updateContact, etc.
};

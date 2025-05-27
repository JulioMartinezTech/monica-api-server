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
  // get request

  getGenders: async () => {
    const response = await monicaAPI.get("/genders");
    return response.data;
  },

  getCountries: async () => {
    const response = await monicaAPI.get("/countries");
    return response.data;
  },

  //post request

  createContact: async (contactData) => {
    try {
      const response = await monicaAPI.post("/contacts", contactData);
      return response.data;
    } catch (error) {
      console.error(
        "Error to create the contact",
        error.response?.data || error.message
      );
      throw error;
    }
  },

  createContactField: async (contactFieldData) => {
    try {
      const response = await monicaAPI.post("/contactfields", contactFieldData);
      return response.data;
    } catch (error) {
      console.error(
        "Error to create the contact's field",
        error.response?.data || error.message
      );
    }
  },

  createTag: async (tagData) => {
    try {
      const response = await monicaAPI.post("/tags", tagData);
      return response.data;
    } catch (error) {
      console.error(
        "Error to create the tag",
        error.response?.data || error.message
      );
    }
  },

  createAssociateTag: async (associateTagData) => {
    try {
      const response = await monicaAPI.post(
        `/contacts/${associateTagData.id}/setTags`,
        associateTagData
      );
      return response.data;
    } catch (error) {
      console.error(
        "Error when creating a tag association",
        error.response?.data || error.message
      );
    }
  },

  createAddress: async (addressData) => {
    try {
      const response = await monicaAPI.post("/addresses", addressData);
      return response.data;
    } catch (error) {
      console.error(
        "Error when creating the address",
        error.response?.data || error.message
      );
    }
  },

  createCompany: async (companyData) => {
    try {
      const response = await monicaAPI.post("/companies", companyData);
      return response.data;
    } catch (error) {
      console.error(
        "Error when creating the company",
        error.response?.data || error.message
      );
    }
  },

  createOccupation: async (occupationData) => {
    try {
      const response = await monicaAPI.post("/occupations", occupationData);
      return response.data;
    } catch (error) {
      console.error(
        "Error when creating the occupation",
        error.response?.data || error.message
      );
    }
  },

  createDocument: async (documentData) => {
    try {
      const response = await monicaAPI.post("/documents", documentData);
      return response.data;
    } catch (error) {
      console.error(
        "Error when creating the document",
        error.response?.data || error.message
      );
    }
  },
};

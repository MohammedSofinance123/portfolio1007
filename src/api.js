// src/api.js
import axios from "axios";

// Base URL de ton backend (modifie selon ton environnement)
const API_BASE_URL = "http://localhost:5000/api";

/**
 * Envoie le formulaire de contact au backend
 * @param {Object} data { name, email, message }
 * @returns {Promise} Résultat de la requête
 */
export const sendContactForm = (data) => {
  return axios.post(`${API_BASE_URL}/contact`, data);
};

/**
 * Exemple : récupérer la liste des expériences depuis le backend
 * (à implémenter dans backend et ajouter la route correspondante)
 */
export const getExperiences = () => {
  return axios.get(`${API_BASE_URL}/experience`);
};

/**
 * Exemple : récupérer la liste des projets/portfolio
 */
export const getPortfolio = () => {
  return axios.get(`${API_BASE_URL}/portfolio`);
};

import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    setIsSubmitting(true);

    try {
      const res = await axios.post("http://localhost:5000/api/contact", formData);
      if (res.status === 200) {
        setStatus("✅ Message envoyé avec succès !");
        setFormData({ name: "", email: "", message: "" });

        // Optionnel : masquer le message après 5 secondes
        setTimeout(() => setStatus(""), 5000);
      }
    } catch (error) {
      setStatus("❌ Erreur lors de l'envoi. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section  id="contact" className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-800 to-black text-white p-6">
      <h2 className="text-4xl font-bold mb-8">Contactez-moi</h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full max-w-md"
        noValidate
      >
        <input
          type="text"
          name="name"
          placeholder="Votre nom"
          value={formData.name}
          onChange={handleChange}
          className="p-3 mb-4 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          required
          disabled={isSubmitting}
        />
        <input
          type="email"
          name="email"
          placeholder="Votre email"
          value={formData.email}
          onChange={handleChange}
          className="p-3 mb-4 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          required
          disabled={isSubmitting}
        />
        <textarea
          name="message"
          placeholder="Votre message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          className="p-3 mb-6 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          required
          disabled={isSubmitting}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className={`px-6 py-3 rounded text-white font-semibold transition ${
            isSubmitting
              ? "bg-cyan-400 cursor-not-allowed"
              : "bg-cyan-500 hover:bg-cyan-600"
          }`}
        >
          {isSubmitting ? "Envoi..." : "Envoyer"}
        </button>
      </form>

      {status && (
        <p
          className={`mt-4 text-center font-medium ${
            status.includes("✅") ? "text-green-400" : "text-red-400"
          }`}
          role="alert"
          aria-live="polite"
        >
          {status}
        </p>
      )}
    </section>
  );
};

export default Contact;

import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    setIsSubmitting(true);

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus(t("contact.success_message"));
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus(""), 5000);
      } else {
        throw new Error("Server error");
      }
    } catch (error) {
      setStatus(t("contact.error_message"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black px-6 py-12"
      aria-label={t("contact.aria_label")}
    >
      <div
        className="w-full max-w-lg bg-black bg-opacity-60 backdrop-blur-md rounded-3xl p-10 shadow-2xl
          animate-fadeIn"
      >
        <h2 className="text-4xl font-extrabold text-white mb-10 text-center tracking-wide">
          {t("contact.title")}
        </h2>

        <form
          onSubmit={handleSubmit}
          noValidate
          aria-busy={isSubmitting}
          className="flex flex-col gap-6"
        >
          {[ 
            { label: t("contact.name_label"), name: "name", type: "text" },
            { label: t("contact.email_label"), name: "email", type: "email" },
          ].map(({ label, name, type }) => (
            <div key={name} className="relative">
              <input
                type={type}
                id={name}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                placeholder=" "
                className="peer w-full rounded-xl bg-gray-800 bg-opacity-70 border border-gray-600
                  px-4 py-3 text-white text-lg placeholder-transparent
                  focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent
                  transition"
                autoComplete={name === "email" ? "email" : "name"}
              />
              <label
                htmlFor={name}
                className="absolute left-4 top-3 text-gray-400 text-lg cursor-text
                  transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base
                  peer-placeholder-shown:text-gray-500 peer-focus:top-1 peer-focus:text-cyan-400 peer-focus:text-sm"
              >
                {label}
              </label>
            </div>
          ))}

          <div className="relative">
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              placeholder=" "
              className="peer w-full rounded-xl bg-gray-800 bg-opacity-70 border border-gray-600
                px-4 py-3 text-white text-lg resize-y placeholder-transparent
                focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent
                transition"
            />
            <label
              htmlFor="message"
              className="absolute left-4 top-3 text-gray-400 text-lg cursor-text
                transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base
                peer-placeholder-shown:text-gray-500 peer-focus:top-1 peer-focus:text-cyan-400 peer-focus:text-sm"
            >
              {t("contact.message_label")}
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 rounded-xl font-semibold text-white
              bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg
              hover:from-cyan-600 hover:to-blue-700 transition-transform duration-200
              focus:outline-none focus:ring-4 focus:ring-cyan-400 focus:ring-opacity-70
              ${isSubmitting ? "cursor-wait animate-pulse opacity-75" : ""}`}
          >
            {isSubmitting ? t("contact.sending") : t("contact.send")}
          </button>
        </form>

        {status && (
          <p
            className={`mt-8 text-center font-medium ${
              status.includes("✅") ? "text-green-400" : "text-red-400"
            } select-none`}
            role="alert"
            aria-live="polite"
          >
            {status}
          </p>
        )}
      </div>
    </section>
  );
};

export default Contact;

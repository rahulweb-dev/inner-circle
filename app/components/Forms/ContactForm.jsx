"use client";

import { useState } from "react";

export default function ContactForm({
  title = "Get In Touch",
  description = "Our team will respond shortly.",
}) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  // Validation function
  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!form.message.trim()) newErrors.message = "Message cannot be empty.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit function
  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("");
    if (!validate()) return;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(form),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        setStatus("SUCCESS");
        setForm({ name: "", email: "", message: "" });
        setErrors({});
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("ERROR");
    }
  };

  return (
    <div className="bg-white shadow-xl border border-gray-200 rounded-2xl p-8 sm:p-10">
      <h3 className="text-2xl font-serif font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">

        {/* Name Input */}
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={`w-full p-3 rounded-lg border ${
              errors.name ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-[#C7A27C]`}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        {/* Email Input */}
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={`w-full p-3 rounded-lg border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-[#C7A27C]`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        {/* Message Input */}
        <div>
          <textarea
            name="message"
            rows={4}
            placeholder="Your Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className={`w-full p-3 rounded-lg border ${
              errors.message ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-[#C7A27C]`}
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-[#C7A27C] text-white font-semibold py-3 rounded-lg hover:bg-[#b8926f] transition"
        >
          Send Message
        </button>

        {/* Success/Error Messages */}
        {status === "SUCCESS" && (
          <p className="text-green-600 font-medium mt-2">Message sent successfully!</p>
        )}
        {status === "ERROR" && (
          <p className="text-red-600 font-medium mt-2">Something went wrong. Try again.</p>
        )}
      </form>
    </div>
  );
}

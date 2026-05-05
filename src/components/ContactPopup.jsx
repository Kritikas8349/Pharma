import React, { useState } from "react";
import "./ContactPopup.css";

const ContactPopup = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({
    name: "",
    city: "",
    experience: "",
    investment: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      await fetch("https://script.google.com/macros/s/AKfycbzhBGyLIuuz4SivOdXGJfgrUfbQl73dvInj6Y3I4jvwvF6t35puXMaslfia44xRGdkpGw/exec", {
        method: "POST",
        mode: "no-cors",   
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "partner",
          ...form,
        }),
      });
  
      alert("Form submitted successfully!");
      setForm({ name: "", city: "", experience: "", investment: "" });
      onClose();
  
    } catch (error) {
      alert("Network error! Try again.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <button className="popup-close" onClick={onClose}>
          ✖
        </button>

        <h2>Become a Novajoy Partner</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="city"
            placeholder="City"
            value={form.city}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="experience"
            placeholder="Experience (Years)"
            value={form.experience}
            onChange={handleChange}
          />

          <input
            type="text"
            name="investment"
            placeholder="Investment Capacity"
            value={form.investment}
            onChange={handleChange}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPopup;
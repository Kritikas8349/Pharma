import React, { useState } from "react";
import "./GetInTouch.css";

const GetInTouch = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
          type: "contact",
          ...formData,
        }),
      });
  
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", number: "", message: "" });
      onClose();
  
    } catch (error) {
      alert("Network error! Try again.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>
        <h2>Get In Touch</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="number"
            placeholder="Your Phone Number"
            value={formData.number}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default GetInTouch;
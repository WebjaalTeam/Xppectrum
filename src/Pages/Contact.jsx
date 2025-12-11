import React, { useState } from "react";
import "./Contact.css";
import Footer from "../Components/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully!");
    console.log(formData);
  };

  return (
    <section className="contact-section">
      <h2>Contact Us</h2>
      <p>We're here to help. Send us a message anytime.</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          onChange={handleChange}
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          required
          onChange={handleChange}
        ></textarea>

        <button type="submit" className="submit-btn">
          Send Message
        </button>
      </form>
      <Footer/>
    </section>
  );
}

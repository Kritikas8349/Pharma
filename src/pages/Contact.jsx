import React from "react";
import "./Contact.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaShieldAlt,
  FaAward,
  FaTruck,
  FaLeaf
} from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-wrapper">
        
        {/* LEFT */}
        <div className="contact-left">
          <p className="contact-tag">CONTACT US</p>

          <h1 className="contact-title">
            Get In Touch <br />
            <span>We’re Here to Help!</span>
          </h1>

          <p className="contact-desc">
            Have questions about our products or services? Fill out the form
            or reach us using the details provided. Our team will get back
            to you as soon as possible.
          </p>

          <form className="contact-form">
            <div className="form-row">
              <input type="text" placeholder="Your Name *" />
              <input type="email" placeholder="Your Email *" />
            </div>

            <input type="text" placeholder="Subject *" />
            <textarea placeholder="Your Message *"></textarea>

            <button type="submit">
             Send Message  ➜ 
            </button>
          </form>
        </div>

        {/* RIGHT */}
        <div className="contact-right">
          <div className="contact-card">

            <div className="info-row">
              <div className="icon-circle"><FaMapMarkerAlt /></div>
              <div>
                <h3>Address</h3>
                <p>Bandra East, Mumbai</p>
                <p>Maharashtra</p>
              </div>
            </div>

            <div className="divider"></div>

            <div className="info-row">
              <div className="icon-circle"><FaPhoneAlt /></div>
              <div>
                <h3>Contact</h3>
                <p>Phone: +91 9203598295</p>
                <p>Email: admin@novajoyremedies.com</p>
              </div>
            </div>

            <div className="divider"></div>

            <div className="info-row">
              <div className="icon-circle"><FaClock /></div>
              <div>
                <h3>Open Time</h3>
                <p>Monday - Friday : 10:00 - 20:00</p>
                <p>Saturday - Sunday : 11:00 - 18:00</p>
              </div>
            </div>

            <div className="divider"></div>

            <div className="info-row no-border">
              <div className="icon-circle">
                <FaShareAlt />
              </div>
              <div>
                <h3>Stay Connected</h3>
                <div className="socials">
                  <FaFacebookF />
                  <FaTwitter />
                  <FaLinkedinIn />
                  <FaInstagram />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* FEATURES */}
      <div className="features">
        <div className="feature">
          <FaShieldAlt />
          <div>
            <h4>Reliable Support</h4>
            <p>Our team is always ready to assist you.</p>
          </div>
        </div>

        <div className="feature">
          <FaAward />
          <div>
            <h4>Quality Assurance</h4>
            <p>We are committed to quality and trust.</p>
          </div>
        </div>

        <div className="feature">
          <FaTruck />
          <div>
            <h4>On-Time Delivery</h4>
            <p>We ensure timely and safe delivery.</p>
          </div>
        </div>

        <div className="feature">
          <FaLeaf />
          <div>
            <h4>Customer Satisfaction</h4>
            <p>Your satisfaction is our top priority.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
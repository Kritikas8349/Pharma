// Footer.jsx
import React from "react";
import "./Footer.css";
// import HandImg from "../assets/footer-hand.png";


import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaWhatsapp,
    FaLinkedin,
    FaInstagram,
} from "react-icons/fa";

import logo1 from "../assets/logo_novajoy.png";

const Footer = () => {
    return (
        <>


            {/*----------------------------------- Bottom -----------------------------*/}

            <footer className="footer">

                {/* TOP SECTION */}
                <div className="footer__container">

                    {/* LOGO */}
                    <div className="footer__col">
                        <div className="footer__logo">
                            <img src={logo1} alt="logo" />
                        </div>

                        <p>
                            Providing high-quality medicines with trust, care, and innovation.
                            Delivering healthcare solutions directly to your doorstep for a healthier tomorrow.
                        </p>
                    </div>

                    {/* NAVIGATION */}
                    <div className="footer__col">
                        <h4>Navigation</h4>
                        <ul>
                            <li onClick={() => document.getElementById("home").scrollIntoView({ behavior: "smooth" })}>
                                Home
                            </li>

                            <li onClick={() => document.getElementById("about").scrollIntoView({ behavior: "smooth" })}>
                                About Us
                            </li>

                            <li onClick={() => document.getElementById("products").scrollIntoView({ behavior: "smooth" })}>
                                Products
                            </li>

                            <li onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}>
                                Contact Us
                            </li>
                        </ul>
                    </div>

                    {/* QUICK LINKS */}
                    <div className="footer__col">
                        <h4>Quick Links</h4>
                        <ul>
                            <li onClick={() => window.location.href = "/contact"}>Contact Us</li>
                            <li onClick={() => {
                                document.getElementById("testimonials")
                                    ?.scrollIntoView({ behavior: "smooth" });
                            }}>
                                Testimonials
                            </li>
                            <li onClick={() => window.location.href = "/"}>Privacy & Policy</li>
                            <li onClick={() => window.location.href = "/"}>Blog</li>
                        </ul>
                    </div>

                    {/* SERVICES */}
                    <div className="footer__col">
                        <h4>Services</h4>
                        <ul>
                            <li onClick={() => window.location.href = "/"}>Healthcare Consultation</li>
                            <li onClick={() => window.location.href = "/"}>Quality Assurance</li>
                            <li onClick={() => window.location.href = "/"}>Bulk Orders & Distribution</li>
                            <li onClick={() => window.location.href = "/"}>Prescription Support</li>
                        </ul>
                    </div>

                </div>

                {/* BOTTOM SECTION */}
                <div className="footer__bottom">
                    <div className="footer__bottom-content">

                        {/* Address */}
                        <div className="footer__item">
                            <FaMapMarkerAlt />
                            <span>Mumbai, Maharashtra</span>
                        </div>

                        {/* Phone */}
                        <div className="footer__item">
                            <FaPhoneAlt />
                            <span>+91  9203598295</span>
                        </div>

                        {/* Email */}
                        <div className="footer__item">
                            <FaEnvelope />
                            <span> novajoyremedies@gmail.com</span>
                        </div>

                        {/* Social */}
                        <div className="footer__socials">
                            <a href="https://facebook.com" target="_blank" rel="noreferrer">
                                <FaWhatsapp />
                            </a>

                            <a href="https://twitter.com" target="_blank" rel="noreferrer">
                                <FaLinkedin />
                            </a>

                            <a href="https://youtube.com" target="_blank" rel="noreferrer">
                                <FaInstagram />
                            </a>
                        </div>

                    </div>

                    <div className="footer__divider"></div>
                </div>

                {/* COPYRIGHT */}
                <div className="footer__copyright">
                    © 2026 NovajoyRemedies - All Rights Reserved
                </div>

            </footer>

        </>
    );
};

export default Footer;
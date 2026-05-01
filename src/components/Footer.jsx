// Footer.jsx
import React from "react";
import "./Footer.css";
// import HandImg from "../assets/footer-hand.png";


import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaFacebookF,
    FaTwitter,
    FaYoutube,
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
                            <li onClick={() => window.location.href = "/faq"}>FAQs</li>
                            <li onClick={() => window.location.href = "/pricing"}>Privacy & Policy</li>
                            <li onClick={() => window.location.href = "/blog"}>Blog</li>
                        </ul>
                    </div>

                    {/* SERVICES */}
                    <div className="footer__col">
                        <h4>Services</h4>
                        <ul>
                            <li onClick={() => window.location.href = "/services/seo"}>Healthcare Consultation</li>
                            <li onClick={() => window.location.href = "/services/social-media"}>Quality Assurance</li>
                            <li onClick={() => window.location.href = "/services/web-development"}>Bulk Orders & Distribution</li>
                            <li onClick={() => window.location.href = "/services/branding"}>Prescription Support</li>
                        </ul>
                    </div>

                </div>

                {/* BOTTOM SECTION */}
                <div className="footer__bottom">
                    <div className="footer__bottom-content">

                        {/* Address */}
                        <div className="footer__item">
                            <FaMapMarkerAlt />
                            <span>Mumbai, Madhya Pradesh, India</span>
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
                                <FaFacebookF />
                            </a>

                            <a href="https://twitter.com" target="_blank" rel="noreferrer">
                                <FaTwitter />
                            </a>

                            <a href="https://youtube.com" target="_blank" rel="noreferrer">
                                <FaYoutube />
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
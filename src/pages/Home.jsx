import React, { useEffect, useState, useMemo } from "react";
import "./Home.css";
import ContactPopup from "../components/ContactPopup";
import { useNavigate } from "react-router-dom";

import { FaUserCircle } from "react-icons/fa";
import { FaCheckCircle, FaFlask, FaCertificate } from "react-icons/fa";
import { GiMedicines } from "react-icons/gi";
import { FaHandshake } from "react-icons/fa";

import { FaCapsules, FaBullhorn, FaAward, FaChartLine } from "react-icons/fa";

import deal1 from "../assets/deal1.png";
import deal2 from "../assets/deal2.png";
import deal3 from "../assets/deal3.png";
import deal4 from "../assets/deal4.png";

import banner1 from "../assets/novaflow-banner.png";
import banner2 from "../assets/rafnoy-banner.png";
import banner3 from "../assets/Drota-banner.png";

import about from "../assets/about.png";
import lab from "../assets/lab.jpg";
import pharmaImg from "../assets/franchise.png";


import novaflowImg from "../assets/Novaflow.png";
import noyImg from "../assets/noy.png";
import refanoyImg from "../assets/refanoy400.png";
import DrotajoyImg from "../assets/Drotajoy.png";
import DrotajoyaImg from "../assets/Drotajoy-a.png";
import lamjoyImg from "../assets/lamjoy.png";


const texts = [
    "Your Wellness. Our Joy in Trusted Care.",
    "Pioneering Wellness, Delivering Excellence.",
];


const data = [
    {
        title: "Gastroenterology",
        desc: "Advanced digestive care solutions designed for effective relief.",
        bg: "light-green",
        iconImg: deal1
    },
    {
        title: "Antibiotics",
        desc: "Reliable infection management with clinically trusted formulations.",
        bg: "blue",
        iconImg: deal2
    },
    {
        title: "Nutritional Supplements",
        desc: "Holistic wellness support for daily health and vitality.",
        bg: "light-blue",
        iconImg: deal3
    },
    {
        title: "Cardiology and Diabetic ",
        desc: "Comprehensive solutions for diverse healthcare needs.",
        bg: "green",
        iconImg: deal4
    }
];


const products = [
    {
        id: 1,
        category: "Gastrointestinal",
        name: "NOVAFLOW SUSP.",
        img: novaflowImg,
        desc: "Relief from constipation and bowel issues.",
        composition: ["Liquid Paraffin", "Milk of Magnesia", "Sodium Picosulfate"],
        dosage: "10–15 ml at bedtime",
        pack: "200 ml Suspension"
    },
    {
        id: 2,
        category: "Gastrointestinal",
        name: "SUCRONOY-O",
        img: noyImg,
        desc: "Effective for acidity and ulcers.",
        composition: ["Sucralfate", "Oxetacaine"],
        dosage: "2–3 times daily before meals",
        pack: "100 ml Suspension"
    },
    {
        id: 3,
        category: "Gastrointestinal",
        name: "REFANOY 400",
        img: refanoyImg,
        desc: "Antibiotic for gut infections.",
        composition: ["Rifaximin 400 mg"],
        dosage: "1 tablet twice daily",
        pack: "10 Tablets"
    },
    {
        id: 4,
        category: "Pain Management",
        name: "DROTAJOY-M",
        img: DrotajoyImg,
        desc: "Powerful pain relief.",
        composition: ["Drotaverine", "Mefenamic Acid"],
        dosage: "1 tablet twice daily",
        pack: "10 Tablets"
    },
    {
        id: 5,
        category: "Pain Management",
        name: "DROTAJOY-A",
        img: DrotajoyaImg,
        desc: "Relief from muscle and joint pain.",
        composition: ["Drotaverine", "Aceclofenac"],
        dosage: "1 tablet twice daily",
        pack: "10 Tablets"
    },
    {
        id: 6,
        category: "Wellness",
        name: "LAMJOY-GN",
        img: lamjoyImg,
        desc: "Supports relaxation and sleep.",
        composition: ["L-Theanine", "Magnesium", "Melatonin"],
        dosage: "1 tablet at bedtime",
        pack: "10 Tablets"
    }

];


const testimonials = [
    {
        name: "Amit Sharma",
        text: "Excellent service and fast delivery. Medicines were genuine and well packed.",
    },
    {
        name: "Priya Verma",
        text: "Very reliable platform. Affordable prices and great customer support.",
    },
    {
        name: "Rahul Singh",
        text: "I received my medicines on time. Highly recommended.",
    },
];

const Home = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);
    const [activeCategory, setActiveCategory] = useState("Gastrointestinal");
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % texts.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const filteredProducts = products.filter(
        (item) => item.category === activeCategory
    );

    return (
        <>
            <section className="home" id="home">
                <div className="home__overlay"></div>

                <div className="home__content">
                    <p className="tag">Trusted Healthcare Solutions</p>

                    <h1 className="title">
                        Novajoy Remedies <br />
                        <span key={index} className="changing-text">
                            {texts[index]}
                        </span>
                    </h1>

                    <p className="subtitle">
                        Delivering high-quality pharmaceutical products with reliability,
                        innovation, and care for a healthier tomorrow.
                    </p>

                    <div className="home__buttons">
                        <button className="btn primary">View Our Portfolio</button>
                        <button onClick={() => setOpen(true)} className="btn secondary">Partner With Us</button>
                    </div>
                </div>
            </section>



            <section className="deals">
                <h2>Our Commitment to Better Healthcare</h2>

                {/* ✅ Company Overview (NEW ADDITION) */}
                <p className="deals-intro">
                    At Novajoy Remedies, we believe that healthcare should be accessible, reliable, and effective.
                    Our commitment lies in delivering quality-driven pharmaceutical solutions that enhance patient
                    well-being while maintaining the highest ethical standards. We strive to bridge the gap between
                    innovation and affordability in modern medicine.
                </p>

                <div className="deals-container">
                    {data.map((item, i) => (
                        <div className={`deal-card ${item.bg}`} key={i}>

                            <div className="top">
                                <div className="icon_deals">
                                    <img src={item.iconImg} alt="icon" />
                                </div>
                                <button className="arrow">→</button>
                            </div>

                            <h4>{item.title}</h4>
                            <p>{item.desc}</p>

                            {/* IMAGE BOTTOM RIGHT */}
                            <img src={item.img} alt="" className="card-img" />

                        </div>
                    ))}
                </div>
            </section>



            <section className="about" id="about">
                {/* LEFT */}
                <div className="about-left">
                    <img src={about} alt="Novajoy Remedies" />

                    <div className="about-card">
                        <p>Built on trust, research, and dedication to healthcare excellence</p>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="about-right">

                    <span className="about-tag">ABOUT NOVAJOY</span>

                    <h2>
                        Innovating Healthcare <br />
                        With Trust & Excellence
                    </h2>

                    {/* 🔷 OUR STORY */}
                    <p className="about-desc">
                        Novajoy Remedies was founded with a vision to combine <strong>“Joy” and “Innovation”</strong> in healthcare.
                        From its inception, the company has focused on developing reliable and effective pharmaceutical products
                        that bring a positive impact to patients' lives.
                    </p>

                    <p className="about-desc">
                        With a strong foundation built on trust, research, and dedication, Novajoy continues to grow as a brand
                        committed to delivering excellence in healthcare.
                    </p>

                    {/* 🔷 MISSION & VISION */}
                    <div className="about-mv">

                        <div className="mv-box">
                            <h4>Our Mission</h4>
                            <p>
                                To make advanced healthcare affordable and accessible to every individual by delivering
                                high-quality pharmaceutical products.
                            </p>
                        </div>

                        <div className="mv-box">
                            <h4>Our Vision</h4>
                            <p>
                                To become a leading name in the Indian pharmaceutical industry through innovation,
                                research-driven formulations, and customer trust.
                            </p>
                        </div>

                    </div>

                    <button
                        className="about-btn"
                        onClick={() => {
                            const section = document.getElementById("quality");
                            section?.scrollIntoView({ behavior: "smooth" });
                        }}
                    >
                        Learn More
                    </button>

                </div>
            </section>




            <section className="products">

                <h2>Product Portfolio – Clinical Excellence</h2>

                {/* 🔷 CATEGORY TABS */}
                <div className="category-tabs">
                    {["Gastrointestinal", "Pain Management", "Wellness"].map((cat) => (
                        <button
                            key={cat}
                            className={activeCategory === cat ? "active" : ""}
                            onClick={() => setActiveCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
                <div className="product-container">
                    {products
                        .filter((item) => item.category === activeCategory)
                        .slice(0, 4)
                        .map((item) => (
                            <div className="product-card" key={item.id}>
                                <img src={item.img} alt={item.name} />

                                <h4>{item.name}</h4>

                                <button onClick={() => setSelected(item)}>
                                    Learn More
                                </button>
                            </div>
                        ))}
                </div>

                {/* 🔷 VIEW MORE BUTTON */}
                {products.filter((item) => item.category === activeCategory).length > 4 && (
                    <button className="view-more">
                        View More Products →
                    </button>
                )}

                {/* 🔷 MODAL */}
                {selected && (
                    <div className="modal" onClick={() => setSelected(null)}>
                        <div
                            className="modal-content"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <span className="close" onClick={() => setSelected(null)}>
                                ✖
                            </span>

                            <img src={selected.img} alt="" />

                            <h3>{selected.name}</h3>
                            <p>{selected.desc}</p>

                            <div className="modal-info">
                                <ul>
                                    {selected.composition.map((c, i) => (
                                        <li key={i}>{c}</li>
                                    ))}
                                    <li><strong>Dosage:</strong> {selected.dosage}</li>
                                    <li><strong>Pack Size:</strong> {selected.pack}</li>
                                    <li>WHO-GMP Certified</li>
                                </ul>
                            </div>

                            <button className="modal-btn">
                                Contact for Details
                            </button>
                        </div>
                    </div>
                )}

            </section>



            <section className="banner">

                {/* LEFT BIG CARD */}
                <div className="banner-card large">
                    <img src={banner1} alt="banner" />

                </div>

                {/* RIGHT SIDE */}
                <div className="banner-right">

                    <div className="banner-card small">
                        <img src={banner2} alt="banner" />

                        <div className="overlay">
                            <span className="tagline">Daily Wellness</span>

                            <h3>Refanoy 400</h3>

                            <p>
                                Antibiotic for effective gut infection relief.
                            </p>

                            <button>Buy Now</button>
                        </div>
                    </div>

                    <div className="banner-card small">
                        <img src={banner3} alt="banner" />

                        <div className="overlay">
                            <span className="tagline">Bone & Joint Support</span>

                            <h3>Drotajoy-A</h3>

                            <p>
                                Relief from muscle and joint pain.
                            </p>

                            <button>Buy Now</button>
                        </div>
                    </div>

                </div>
            </section>

            <section className="quality" id="quality">

                <div className="quality-wrapper">

                    {/* LEFT CONTENT */}
                    <div className="quality-left">

                        <span className="quality-tag">QUALITY ASSURANCE</span>

                        <h2>
                            The Gold Standard <br />
                            In Pharmaceutical Quality
                        </h2>

                        <p className="quality-desc">
                            At Novajoy Remedies, quality isn't just a department; it's our DNA.
                        </p>

                        <p className="quality-desc">
                            From sourcing raw materials to final packaging, every step follows strict
                            international compliance protocols ensuring unmatched safety and reliability.
                        </p>

                        {/* FEATURES GRID */}
                        <div className="quality-features">

                            <div className="q-item">
                                <FaCertificate className="q-icon" />
                                <div>
                                    <h4>WHO-GMP Certified</h4>
                                    <p>Global manufacturing standards</p>
                                </div>
                            </div>

                            <div className="q-item">
                                <FaCheckCircle className="q-icon" />
                                <div>
                                    <h4>ISO Standards</h4>
                                    <p>Strict quality assurance protocols</p>
                                </div>
                            </div>

                            <div className="q-item">
                                <FaFlask className="q-icon" />
                                <div>
                                    <h4>Lab Tested</h4>
                                    <p>Advanced scientific validation</p>
                                </div>
                            </div>

                            <div className="q-item">
                                <GiMedicines className="q-icon" />
                                <div>
                                    <h4>Safe Formulations</h4>
                                    <p>Effective & patient-friendly</p>
                                </div>
                            </div>

                        </div>

                        <p className="quality-highlight">
                            Ensuring safety, efficacy, and consistency in every product we deliver.
                        </p>

                    </div>

                    {/* RIGHT VISUAL */}
                    <div className="quality-right">

                        {/* IMAGE BLOCK */}
                        <div className="quality-image">
                            <img src={lab} alt="Pharma Quality Lab" />

                            {/* OVERLAY CONTENT */}
                            <div className="quality-overlay">
                                <h3>Certified Excellence</h3>
                                <p>Delivering trust through globally approved standards</p>
                            </div>
                        </div>

                        {/* BADGES */}
                        <div className="quality-mini-cards">
                            <div className="mini-card">WHO-GMP</div>
                            <div className="mini-card">ISO</div>
                            <div className="mini-card">LAB VERIFIED</div>
                        </div>

                    </div>

                </div>

            </section>


            <section className="franchise">

                <div className="franchise-container">

                    {/* LEFT */}
                    <div className="franchise-left">
                        <img src={pharmaImg} alt="Novajoy Products" />
                    </div>

                    {/* RIGHT */}
                    <div className="franchise-right">

                        <span className="f-tag">PARTNER WITH US</span>

                        <h2>
                            Franchise (PCD) Opportunity
                        </h2>

                        <p className="desc">
                            Join hands with Novajoy Remedies and build a successful business
                            with a brand that stands for quality and trust.
                        </p>

                        <div className="features">

                            <div className="feature">
                                <FaCapsules />
                                <div>
                                    <h4>Wide Range of DCGI-Approved Products</h4>
                                    <p>High-quality formulations across segments.</p>
                                </div>
                            </div>

                            <div className="feature">
                                <FaBullhorn />
                                <div>
                                    <h4>Strong Marketing Support</h4>
                                    <p>Promotional materials to grow your brand.</p>
                                </div>
                            </div>

                            <div className="feature">
                                <FaAward />
                                <div>
                                    <h4>Monopoly Rights</h4>
                                    <p>Exclusive territories for better growth.</p>
                                </div>
                            </div>

                            <div className="feature">
                                <FaChartLine />
                                <div>
                                    <h4>High Growth Potential</h4>
                                    <p>Be part of a rapidly growing pharma sector.</p>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

                {/* 🔥 CTA BAR OUTSIDE */}
                <div className="cta-bar">

                    <div className="cta-left">
                        <div className="cta-icon">
                            <FaHandshake />
                        </div>

                        <div>
                            <h4>Be Our Partner. Grow Together.</h4>
                            <p>Let’s create a healthier tomorrow, together.</p>
                        </div>
                    </div>

                    <button onClick={() => setOpen(true)} className="cta-btn">JOIN NOW →</button>

                </div>

            </section>


            <section className="testimonials" id="testimonials">

                <h2>Our Happy Customers!</h2>

                <div className="testimonial-container">
                    {testimonials.map((item, index) => (
                        <div className="testimonial-card" key={index}>

                            <div className="quote">“</div>

                            <p>{item.text}</p>

                            <div className="user">
                                <FaUserCircle className="user-icon" />
                                <div>
                                    <h4>{item.name}</h4>
                                    <span>Customer</span>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </section>


            <ContactPopup isOpen={open} onClose={() => setOpen(false)} />

        </>
    );
};

export default Home;
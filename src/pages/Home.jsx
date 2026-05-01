import React, { useEffect, useState } from "react";
import "./Home.css";
import { FaUserCircle } from "react-icons/fa";

import deal1 from "../assets/deal1.png";
import deal2 from "../assets/deal2.png";
import deal3 from "../assets/deal3.png";
import deal4 from "../assets/deal4.png";

import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner2.png";
import banner3 from "../assets/banner3.png";

import founder from "../assets/founder.png";
import about from "../assets/about.png";


const texts = [
    "Your Wellness. Our Joy.",
    "Care That Puts You First.",
];

const data = [
    {
        iconImg: deal1,
        title: "Instant Video Consultation",
        desc: "Connect within 60 secs",
        bg: "green",

    },
    {
        iconImg: deal2,
        title: "Expert Guidance",
        desc: "Get reliable advice from experienced pharmacists at our store.",
        bg: "light-green",

    },
    {
        iconImg: deal3,
        title: "Quality Medicines",
        desc: "Trusted and certified medicines for everyday healthcare needs.",
        bg: "blue",

    },
    {
        iconImg: deal4,
        title: "Community Care",
        desc: "Serving your neighborhood with care, trust, and consistency.",
        bg: "light-blue",

    }
];

const products = [
    {
        id: 1,
        name: "Turmeric & Ginger Gummies",
        price: "$130",
        img: "https://images.unsplash.com/photo-1584362917165-526a968579e8?q=80&w=500",
        desc: "Boost immunity with natural ingredients.",
        composition: [
            "Turmeric Extract",
            "Ginger Root Extract",
            "Vitamin C",
            "Zinc"
        ],
        dosage: "2 gummies daily",
        pack: "60 gummies bottle",
    },
    {
        id: 2,
        name: "Ambrodil Plus 100 ml",
        price: "$124",
        img: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?q=80&w=500",
        desc: "Effective syrup for cough relief.",
        composition: [
            "Ambroxol Hydrochloride",
            "Guaifenesin",
            "Menthol"
        ],
        dosage: "5ml twice daily",
        pack: "100ml bottle",
    },
    {
        id: 3,
        name: "Stobal Cough Syrup",
        price: "$110",
        img: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=500",
        desc: "Quick relief for dry cough.",
        composition: [
            "Dextromethorphan",
            "Chlorpheniramine",
            "Ammonium Chloride"
        ],
        dosage: "10ml twice daily",
        pack: "100ml bottle",
    },
    {
        id: 4,
        name: "Kids Cough Crusader",
        price: "$140",
        img: "https://images.unsplash.com/photo-1628771065518-0d82f1938462?q=80&w=500",
        desc: "Safe cough solution for kids.",
        composition: [
            "Honey Extract",
            "Tulsi",
            "Licorice Root"
        ],
        dosage: "5ml once daily",
        pack: "60ml bottle",
    },
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
    const [index, setIndex] = useState(0);
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % texts.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

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
                        <button className="btn primary">Explore Products</button>
                        <button className="btn secondary">Get in Touch</button>
                    </div>
                </div>
            </section>



            <section className="deals">
                <h2>Best Deals For You!</h2>

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
                    <img src={about} alt="pharma expert" />

                    <div className="about-card">
                        <p>Successfully delivering trusted medicines across India</p>

                        <div className="card-user">
                            <div className="avatar">
                                <img src={founder} alt="Narendra Singh" />
                            </div>
                            <div>
                                <h4>Mr. Narendra Singh</h4>
                                <span>Founder, Novajoy Remedies</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="about-right">

                    <span className="about-tag">ABOUT NOVAJOY</span>

                    <h2>
                        Trusted Medicines Delivered <br />
                        Right To Your Doorstep
                    </h2>

                    <p className="about-desc">
                        Novajoy Remedies was founded by Mr. Narendra Singh with a vision to
                        simplify healthcare access by delivering genuine and affordable
                        medicines directly to homes. We aim to bridge the gap between
                        quality healthcare and everyday convenience.
                    </p>

                    <p className="about-desc">
                        With a strong focus on quality assurance and customer trust, we
                        ensure that every product meets certified standards while making
                        healthcare accessible to every household.
                    </p>

                    {/* FEATURES */}
                    <ul className="about-list">
                        <li>100% genuine & certified medicines</li>
                        <li>Fast and reliable home delivery service</li>
                        <li>Affordable pricing with quality assurance</li>
                        <li>Customer-first healthcare approach</li>
                    </ul>

                    {/* STATS */}
                    <div className="about-stats">
                        <div>
                            <h3>10K+</h3>
                            <span>Happy Customers</span>
                        </div>
                        <div>
                            <h3>500+</h3>
                            <span>Products Delivered</span>
                        </div>
                        <div>
                            <h3>24/7</h3>
                            <span>Support</span>
                        </div>
                    </div>

                    <button className="about-btn">Learn More</button>

                </div>
            </section>





            <section className="products" id="products">
                <h2>Trending Product For You!</h2>

                <div className="product-container">
                    {products.map((item) => (
                        <div className="product-card" key={item.id}>
                            <img src={item.img} alt={item.name} />

                            <h4>{item.name}</h4>
                            <p className="price">{item.price}</p>

                            <button onClick={() => setSelected(item)}>
                                Learn More
                            </button>
                        </div>
                    ))}
                </div>

                <button className="shop-btn">Shop All →</button>

                {/* MODAL */}
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
                                    {selected.composition.map((item, index) => (
                                        <li key={index}>{item}</li>
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

                    <div className="overlay">
                        <span className="tagline">Premium Healthcare</span>

                        <h2>Vitamins & Supplements</h2>

                        <p>
                            Advanced formulations designed to support immunity and daily wellness.
                        </p>

                        <button>Buy Now</button>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="banner-right">

                    <div className="banner-card small">
                        <img src={banner2} alt="banner" />

                        <div className="overlay">
                            <span className="tagline">Heart Care</span>

                            <h3>Carca 12.5</h3>

                            <p>Supports healthy blood pressure levels.</p>

                            <button>Buy Now</button>
                        </div>
                    </div>

                    <div className="banner-card small">
                        <img src={banner3} alt="banner" />

                        <div className="overlay">
                            <span className="tagline">Daily Wellness</span>

                            <h3>Life Extension Body</h3>

                            <p>Complete nutritional support for your body.</p>

                            <button>Buy Now</button>
                        </div>
                    </div>

                </div>
            </section>

            <section className="testimonials">

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


        </>
    );
};

export default Home;
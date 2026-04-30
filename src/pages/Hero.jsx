import React, { useEffect, useState } from "react";
import "./Hero.css";
import { FaFlask, FaShieldAlt, FaUsers } from "react-icons/fa";
import deal1 from "../assets/deal1.png";
import deal2 from "../assets/deal2.png";
import deal3 from "../assets/deal3.png";
import deal4 from "../assets/deal4.png";

const Hero = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

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


  return (
    <>
      <section className="hero">

        {/* OVERLAY */}
        <div className="overlay"></div>

        {/* CONTENT */}
        <div className={`hero-content ${animate ? "animate" : ""}`}>

          <p className="tag">✔ Trusted Healthcare. Brighter Tomorrow.</p>

          <h1>
            Improving Lives.<br />
            <span>Advancing Health.</span>
          </h1>

          <p className="desc">
            Novajoy Pharma is committed to discovering, developing and
            delivering high-quality medicines that make a meaningful
            difference in people's lives.
          </p>

          <div className="buttons">
            <button className="primary">Our Products</button>
            <button className="secondary">Know More</button>
          </div>

          {/* CARDS */}
          <div className="cards">

            <div className="card">
              <div className="icon"><FaFlask /></div>
              <h4>Research Driven</h4>
              <p>Innovation backed by science and expertise.</p>
            </div>

            <div className="card">
              <div className="icon"><FaShieldAlt /></div>
              <h4>Quality Assured</h4>
              <p>Highest standards in every step.</p>
            </div>

            <div className="card">
              <div className="icon"><FaUsers /></div>
              <h4>Patient Focused</h4>
              <p>Better health outcomes for a better tomorrow.</p>
            </div>

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
    </>
  );
};

export default Hero;
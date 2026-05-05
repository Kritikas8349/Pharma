import React, { useState } from "react";
import "./Product.css";

import refanoyImg from "../assets/refanoy400.png";
import DrotajoyImg from "../assets/Drotajoy.png";
import DrotajoyaImg from "../assets/Drotajoy-a.png";
import lamjoyImg from "../assets/lamjoy.png";
import novaflowImg from "../assets/Novaflow.png";
import noyImg from "../assets/noy.png";
import mebenovaImg from "../assets/mebenova.png"

const productsData = [
  {
    id: 1,
    name: "Novaflow Susp.",
    image: novaflowImg,
    category: "Gastrointestinal",
    composition: "Liquid Paraffin + Milk of Magnesia + Sodium Picosulfate",
    type: "Suspension",
    pack: "200 ml Suspension",
    dosage: "10–15 ml at bedtime",
    description: "Relief from constipation and bowel issues.",
    benefits: [
      "Improves bowel movement",
      "Gentle laxative action",
      "Safe for regular use"
    ]
  },
  {
    id: 2,
    name: "Sucronoy-O",
    image: noyImg,
    category: "Gastrointestinal",
    composition: "Sucralfate + Oxetacaine",
    type: "Suspension",
    pack: "100 ml Suspension",
    dosage: "2–3 times daily before meals",
    description: "Effective for acidity and ulcers.",
    benefits: [
      "Reduces acidity",
      "Protects stomach lining",
      "Fast pain relief"
    ]
  },
  {
    id: 3,
    name: "Refanoy 400",
    image: refanoyImg,
    category: "Gastrointestinal",
    composition: "Rifaximin 400 mg",
    type: "Tablet",
    pack: "10 Tablets",
    dosage: "1 tablet twice daily",
    description: "Antibiotic for gut infections.",
    benefits: [
      "Treats IBS",
      "Controls diarrhea",
      "Improves gut health"
    ]
  },
  {
    id: 4,
    name: "Mebenova-X",
    image: mebenovaImg,
    category: "Gastrointestinal",
    composition: "Mebeverine + Chlordiazepoxide",
    type: "Tablet",
    pack: "10 Tablets",
    dosage: "1 tablet twice daily before meals",
    description: "Relief from IBS and spasms.",
    benefits: [
      "Relieves abdominal pain",
      "Reduces spasms",
      "Improves digestion"
    ]
  },
  {
    id: 5,
    name: "Drotojoy-M",
    image: DrotajoyImg,
    category: "Pain Management",
    composition: "Drotaverine + Mefenamic Acid",
    type: "Tablet",
    pack: "10 Tablets",
    dosage: "1 tablet twice daily after meals",
    description: "Powerful pain relief.",
    benefits: [
      "Reduces abdominal pain",
      "Fast acting",
      "Muscle relaxation"
    ]
  },
  {
    id: 6,
    name: "Drotojoy-A",
    image: DrotajoyaImg,
    category: "Pain Management",
    composition: "Drotaverine + Aceclofenac",
    type: "Tablet",
    pack: "10 Tablets",
    dosage: "1 tablet twice daily after meals",
    description: "Relief from muscle and joint pain.",
    benefits: [
      "Anti-inflammatory",
      "Relieves spasms",
      "Long lasting effect"
    ]
  },
  {
    id: 10,
    name: "Lamjoy-GN",
    image: lamjoyImg,
    category: "Wellness",
    composition: "L-Theanine + Magnesium + Melatonin",
    type: "Tablet",
    pack: "10 Tablets",
    dosage: "1 tablet at bedtime",
    description: "Supports relaxation and sleep.",
    benefits: [
      "Improves sleep quality",
      "Reduces stress",
      "Calms mind"
    ]
  },
  {
    id: 7,
    name: "Bisonova-5",
    image: "/images/bisonova.png",
    category: "Cardio & Diabetic",
    composition: "Bisoprolol 5 mg",
    type: "Tablet",
    pack: "10 Tablets",
    dosage: "1 tablet once daily",
    description: "For blood pressure control.",
    benefits: [
      "Controls hypertension",
      "Supports heart health",
      "Reduces stress on heart"
    ]
  },
  {
    id: 8,
    name: "Diagliva-XR 30",
    image: "/images/diagliva-xr.png",
    category: "Cardio & Diabetic",
    composition: "Gliclazide 30 mg",
    type: "Tablet",
    pack: "10 Tablets",
    dosage: "1 tablet once daily with breakfast",
    description: "Controls blood sugar levels.",
    benefits: [
      "Regulates glucose",
      "Long acting",
      "Safe for diabetes patients"
    ]
  },
  {
    id: 9,
    name: "Diagliva-MXR 30/500",
    image: "/images/diagliva-mxr.png",
    category: "Cardio & Diabetic",
    composition: "Gliclazide + Metformin",
    type: "Tablet",
    pack: "10 Tablets",
    dosage: "1 tablet twice daily with meals",
    description: "Advanced diabetes management.",
    benefits: [
      "Dual action control",
      "Improves insulin response",
      "Reduces sugar spikes"
    ]
  },
  {
    id: 11,
    name: "Lycocard Cap.",
    image: "/images/lycocard.png",
    category: "Wellness",
    composition: "Lycopene + Omega 3 + Vitamins",
    type: "Capsule",
    pack: "10 Capsules",
    dosage: "1 capsule once daily after meals",
    description: "Supports heart and immunity.",
    benefits: [
      "Boosts immunity",
      "Improves heart health",
      "Rich in antioxidants"
    ]
  }
];

const categories = ["All", "Gastrointestinal", "Pain Management", "Cardio & Diabetic", "Wellness"];

const types = ["All", "Tablet", "Capsule", "Suspension"];

export default function Product() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedType, setSelectedType] = useState("All");

  const filteredProducts = productsData.filter((product) => {
    return (
      (selectedCategory === "All" || product.category === selectedCategory) &&
      (selectedType === "All" || product.type === selectedType) &&
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  });


  return (
    <div className="product-page-p">

      {/* Sidebar */}
      <aside className="sidebar-p">
        <h2>Categories</h2>

        {categories.map((cat) => (
          <button
            key={cat}
            className={selectedCategory === cat ? "active-p" : ""}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}

        <h2 style={{ marginTop: "20px" }}>Type</h2>

        {types.map((type) => (
          <button
            key={type}
            className={selectedType === type ? "active-p" : ""}
            onClick={() => setSelectedType(type)}
          >
            {type}
          </button>
        ))}
      </aside>

      {/* Main */}
      <div className="main-content-p">

        {/* Search */}
        <div className="top-bar-p">
          <input
            type="text"
            placeholder="Search medicines..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Grid */}
        <div className="grid-p">
          {filteredProducts.map((product) => (
            <div className="card-p" key={product.id}>

              {/* IMAGE */}
              <div className="card-img-p">
                <img src={product.image} alt={product.name} />
              </div>

              {/* BODY */}
              <div className="card-body-p">
                <h3>{product.name}</h3>
                <p className="pack-p">{product.pack}</p>
                <p className="price-p">{product.price}</p>
                <p className="desc-p">{product.description}</p>

                <ul className="benefits-p">
                  {product.benefits?.slice(0, 2).map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>

                <button
                  className="view-btn-p"
                  onClick={() => setSelectedProduct(product)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* POPUP */}
      {selectedProduct && (
        <div
          className="modal-overlay-p"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="modal-card-p modal-new-p"
            onClick={(e) => e.stopPropagation()}
          >

            {/* CLOSE BUTTON */}
            <span
              className="modal-close-p"
              onClick={() => setSelectedProduct(null)}
            >
              ×
            </span>

            {/* IMAGE */}
            <div className="modal-top-p">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
              />
            </div>

            {/* TITLE */}
            <h2 className="modal-title-p">
              {selectedProduct.name}
            </h2>

            <p className="modal-subtitle-p">
              {selectedProduct.description}
            </p>

            {/* INFO BOX */}
            <div className="modal-info-box-p">
              <ul>
                <li>{selectedProduct.composition}</li>
                <li>
                  <strong>Dosage:</strong> {selectedProduct.dosage}
                </li>
                <li><strong>Pack Size:</strong> {selectedProduct.pack}</li>
                <li>WHO-GMP Certified</li>
              </ul>
            </div>

            {/* CTA BUTTON */}
            <button className="modal-cta-p">
              Contact for Details
            </button>

          </div>
        </div>
      )}
    </div>
  );
}
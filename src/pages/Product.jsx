import React, { useState } from "react";
import "./Product.css";

const productsData = [
  {
    id: 1,
    name: "Novaflow Susp.",
    image: "/images/novaflow.png",
    category: "Gastrointestinal",
    composition: "Liquid Paraffin + Milk of Magnesia + Sodium Picosulfate",
    type: "Suspension",
    price: "₹120.00",
    pack: "200 ml Suspension",
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
    image: "/images/sucronoy.png",
    category: "Gastrointestinal",
    composition: "Sucralfate + Oxetacaine",
    type: "Suspension",
    price: "₹145.00",
    pack: "100 ml Suspension",
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
    image: "/assets/refanoy400.png",
    category: "Gastrointestinal",
    composition: "Rifaximin 400 mg",
    type: "Tablet",
    price: "₹320.00",
    pack: "10 Tablets",
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
    image: "/images/mebenova.png",
    category: "Gastrointestinal",
    composition: "Mebeverine + Chlordiazepoxide",
    type: "Tablet",
    price: "₹210.00",
    pack: "10 Tablets",
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
    image: "/images/drotojoy-m.png",
    category: "Pain Management",
    composition: "Drotaverine + Mefenamic Acid",
    type: "Tablet",
    price: "₹95.00",
    pack: "10 Tablets",
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
    image: "/images/drotojoy-a.png",
    category: "Pain Management",
    composition: "Drotaverine + Aceclofenac",
    type: "Tablet",
    price: "₹110.00",
    pack: "10 Tablets",
    description: "Relief from muscle and joint pain.",
    benefits: [
      "Anti-inflammatory",
      "Relieves spasms",
      "Long lasting effect"
    ]
  },
  {
    id: 7,
    name: "Bisonova-5",
    image: "/images/bisonova.png",
    category: "Cardio & Diabetic",
    composition: "Bisoprolol 5 mg",
    type: "Tablet",
    price: "₹180.00",
    pack: "10 Tablets",
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
    price: "₹150.00",
    pack: "10 Tablets",
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
    price: "₹220.00",
    pack: "10 Tablets",
    description: "Advanced diabetes management.",
    benefits: [
      "Dual action control",
      "Improves insulin response",
      "Reduces sugar spikes"
    ]
  },
  {
    id: 10,
    name: "Lamjoy-GN",
    image: "/images/lamjoy.png",
    category: "Wellness",
    composition: "L-Theanine + Magnesium + Melatonin",
    type: "Tablet",
    price: "₹250.00",
    pack: "10 Tablets",
    description: "Supports relaxation and sleep.",
    benefits: [
      "Improves sleep quality",
      "Reduces stress",
      "Calms mind"
    ]
  },
  {
    id: 11,
    name: "Lycocard Cap.",
    image: "/images/lycocard.png",
    category: "Wellness",
    composition: "Lycopene + Omega 3 + Vitamins",
    type: "Capsule",
    price: "₹300.00",
    pack: "10 Capsules",
    description: "Supports heart and immunity.",
    benefits: [
      "Boosts immunity",
      "Improves heart health",
      "Rich in antioxidants"
    ]
  }
];

const categories = [
  "All",
  "Gastrointestinal",
  "Pain Management",
  "Cardio & Diabetic",
  "Wellness"
];

export default function Product() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = productsData.filter((product) => {
    return (
      (selectedCategory === "All" ||
        product.category === selectedCategory) &&
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="product-page">

      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Categories</h2>
        {categories.map((cat) => (
          <button
            key={cat}
            className={selectedCategory === cat ? "active" : ""}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </aside>

      {/* Main */}
      <div className="main-content">

        {/* Search */}
        <div className="top-bar">
          <input
            type="text"
            placeholder="Search medicines..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Grid */}
        <div className="grid">
          {filteredProducts.map((product) => (
            <div className="card" key={product.id}>

              {/* IMAGE */}
              <div className="card-img">
                <img src={product.image} alt={product.name} />
              </div>

              {/* NAME */}
              <h3>{product.name}</h3>

              {/* PACK */}
              <p className="pack">{product.pack}</p>

              {/* PRICE */}
              <p className="price">{product.price}</p>

              {/* DESC */}
              <p className="desc">{product.description}</p>

              {/* BENEFITS */}
              <ul className="benefits">
                {product.benefits?.slice(0, 2).map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>

              {/* CTA */}
              <span
                className="view-btn"
                onClick={() => setSelectedProduct(product)}
              >
                View Details →
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selectedProduct && (
        <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>

            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="modal-img"
            />

            <h2>{selectedProduct.name}</h2>
            <p className="price">{selectedProduct.price}</p>

            <div className="modal-info">
              <p><strong>Category:</strong> {selectedProduct.category}</p>
              <p><strong>Type:</strong> {selectedProduct.type}</p>
              <p><strong>Composition:</strong> {selectedProduct.composition}</p>
              <p>{selectedProduct.description}</p>
            </div>

            <ul className="benefits">
              {selectedProduct.benefits?.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>

            <button onClick={() => setSelectedProduct(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
// src/data/productsData.js

import refanoyImg from "../assets/refanoy400.png";
import DrotajoyImg from "../assets/Drotajoy.png";
import DrotajoyaImg from "../assets/Drotajoy-a.png";
import lamjoyImg from "../assets/lamjoy.png";
import novaflowImg from "../assets/Novaflow.png";
import noyImg from "../assets/noy.png";
import mebenovaImg from "../assets/mebenova.png";
import bisonovaImg from "../assets/Bisonova-5.png";
import diaglivaImg from "../assets/diagliva-mxr.png";
import diaglivaxrImg from "../assets/diagliva-xr.png";
import lycocardImg from "../assets/Lycocard.png";

export const productsData = [
  {
    id: 1,
    slug: "novaflow-susp",
    name: "Novaflow Suspension",
    image: novaflowImg,
    category: "Gastrointestinal",
    composition: "Liquid Paraffin + Milk of Magnesia + Sodium Picosulfate",
    type: "Suspension",
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
    slug: "sucronoy-o",
    name: "Sucronoy-O",
    image: noyImg,
    category: "Gastrointestinal",
    composition: "Sucralfate + Oxetacaine",
    type: "Suspension",
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
    slug: "refanoy-400",
    name: "Refanoy 400",
    image: refanoyImg,
    category: "Gastrointestinal",
    composition: "Rifaximin 400 mg",
    type: "Tablet",
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
    slug: "mebenova-x",
    name: "Mebenova-X",
    image: mebenovaImg,
    category: "Gastrointestinal",
    composition: "Mebeverine + Chlordiazepoxide",
    type: "Tablet",
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
    slug: "drotojoy-m",
    name: "Drotojoy-M",
    image: DrotajoyImg,
    category: "Pain Management",
    composition: "Drotaverine + Mefenamic Acid",
    type: "Tablet",
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
    slug: "drotojoy-a",
    name: "Drotojoy-A",
    image: DrotajoyaImg,
    category: "Pain Management",
    composition: "Drotaverine + Aceclofenac",
    type: "Tablet",
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
    slug: "bisonova-5",
    name: "Bisonova-5",
    image: bisonovaImg,
    category: "Cardio & Diabetic",
    composition: "Bisoprolol 5 mg",
    type: "Tablet",
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
    slug: "diagliva-xr-30",
    name: "Diagliva-XR 30",
    image: diaglivaImg,
    category: "Cardio & Diabetic",
    composition: "Gliclazide 30 mg",
    type: "Tablet",
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
    slug: "diagliva-mxr-30-500",
    name: "Diagliva-MXR 30/500",
    image: diaglivaxrImg,
    category: "Cardio & Diabetic",
    composition: "Gliclazide + Metformin",
    type: "Tablet",
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
    slug: "lamjoy-gn",
    name: "Lamjoy-GN",
    image: lamjoyImg,
    category: "Wellness",
    composition: "L-Theanine + Magnesium + Melatonin",
    type: "Tablet",
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
    slug: "lycocard-cap",
    name: "Lycocard Capsule",
    image: lycocardImg,
    category: "Wellness",
    composition: "Lycopene + Omega 3 + Vitamins",
    type: "Capsule",
    pack: "10 Capsules",
    description: "Supports heart and immunity.",
    benefits: [
      "Boosts immunity",
      "Improves heart health",
      "Rich in antioxidants"
    ]
  }
];
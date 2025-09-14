import { Link } from "react-router-dom"
import { useState } from "react"
import "./Scheme.css"
import Layout from "../layout/layout"

const schemesData = [
  {
    id: 1,
    name: "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)",
    description: "Income support scheme for farmers.",
    type: "central",
    link: "https://pmkisan.gov.in"
  },
  {
    id: 2,
    name: "Pradhan Mantri Kisan Maan-Dhan Yojana (PM-KMY)",
    description: "Income support scheme for farmers.",
    type: "central",
    link: " https://pmkmy.gov.in/"
  },
  {
    id: 3,
    name: "Mukhyamantri Kisan Sahay Yojana",
    description: "Income support scheme for farmers.",
    type: "state",
    link: "https://www.myscheme.gov.in/schemes/mksy"
  },
  {
    id: 4,
    name: "Kera Suraksha Insurance Scheme",
    description:"the Ministry of Agriculture and Farmers Welfare and implemented by the Coconut Development Board",
    type: "central",
    link: "https://www.myscheme.gov.in/schemes/ksis"
  },
  {
    id: 5,
    name: "Gujarat Farm Mechanization Scheme",
    description:"Financial Assistance and subsidies",
    type: "state",
    link: "https://agri.gujarat.gov.in/"
  },
  {
    id: 6,
    name: "Paramparagat Krishi Vikas Yojana (PKVY)",
    description:"Financial Assistance and subsidies",
    type: "central",
    link: "https://www.myscheme.gov.in/schemes/pkvy?utm_source=chatgpt.com"
  },
  {
    id: 7,
    name: "Pradhan Mantri Kaushal Vikas Yojana",
    description:"STT component imparted at PMKVY Training Centres (TC)",
    type: "central",
    link: " https://www.myscheme.gov.in/schemes/pmkvy-stt"
  },
  {
    id: 8,
    name: "Pradhan Mantri Kisan Samman Nidhi",
    description:"The scheme aims to supplement the financial needs of all landholding farmers",
    type: "central",
    link: " https://www.myscheme.gov.in/schemes/pm-kisan"
  },
  {
    id: 9,
    name: "Schemes of Gujarat Agriculture, Farmers Welfare & Co-operation Department",
    description:"AGR-61 Agro Service Providers for the purpose of making farming more profitable with the help of Farm Mechanization",
    type: "state",
    link: " https://agri.gujarat.gov.in/Home/SchemesDetailsPage?Id=6v6SCCcVaKzHbzUn5D4oSg==&domain=KQBjMeZAUYtrIgvpebJ01g==&utm_source=chatgpt.com"
  },
  {
    id: 10,
    name: "Farmer Registry Maharashtra (Agristack)",
    description:"Digital ID / registry for farmers in the state to streamline accessing benefits",
    type: "state",
    link: "https://farmerregistry.ind.in/?utm_source=chatgpt.com"
  },
  {
    id: 11,
    name: "Pradhan Mantri Krishi Sinchayee Yojana: Per Drop More Crop",
    description:"launched by the Dept. of Agriculture & Farmers Welfare, Ministry of Agriculture & Farmers Welfare, Govt. of India on 1st July 2015",
    type: "central",
    link: " https://www.myscheme.gov.in/schemes/pmksypdmc"
  },
  {
    id: 12,
    name: "Pradhan Mantri Fasal Bima Yojna (PMFBY)",
    description:"crop insurance scheme by the Department of Agriculture, Cooperation and Farmers’ Welfare, Ministry of Agriculture",
    type: "central",
    link: "https://www.myscheme.gov.in/schemes/pmfby"
  },
  {
    id: 13,
    name: "Krishonnati Yojana - Sub Mission On Seed And Planting Material (SMSP)",
    description:"centrally sponsored scheme under the umbrella scheme of Green Revolution – Krishonnati Yojana",
    type: "central",
    link: "https://www.myscheme.gov.in/schemes/ky-smsp"
  }
]

function Scheme() {
  const [filter, setFilter] = useState("all")

  const filteredSchemes =
    filter === "all" ? schemesData : schemesData.filter((scheme) => scheme.type === filter)

  return (
    <Layout>
      <div className="schemes-container">
        <h1 className="schemes-title">Government Schemes for Farmers</h1>
        <div className="filters">
          <button className={filter === "all" ? "active" : ""} onClick={() => setFilter("all")}>
            All Schemes
          </button>
          <button className={filter === "central" ? "active" : ""} onClick={() => setFilter("central")}>
            Central Schemes
          </button>
          <button className={filter === "state" ? "active" : ""} onClick={() => setFilter("state")}>
            State Schemes
          </button>
        </div>
        <div className="schemes-list">
          {filteredSchemes.map((scheme) => (
            <div key={scheme.id} className="scheme-card">
              <h2>{scheme.name}</h2>
              <p>{scheme.description}</p>
              <span className={`type ${scheme.type}`}>{scheme.type.toUpperCase()}</span>
              <Link to={`/scheme/${scheme.id}`} className="learn-more">
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Scheme
"use client"

import { Link } from "react-router-dom"
import { useState } from "react"
import Layout from "../layout/layout"
import "./Scheme.css"

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
  name: " Mukhyamantri Kisan Sahay Yojana",
  description: "Income support scheme for farmers.",
  type: "state",
  link: "https://www.myscheme.gov.in/schemes/mksy"
  },


{
  id: 4,
  name: "Kisan Credit Card (KCC)",
  description:"Financial Assistance and subsidies",
  type: "central",
  link: "https://agricoop.nic.in/en/FarmersWelfare/KisanCreditCard"
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
  link: " https://pgsindia-ncof.gov.in/"
  }
  // Add more schemes here
]

function Scheme() {
  const [filter, setFilter] = useState("all")

  const filteredSchemes = filter === "all" ? schemesData : schemesData.filter((scheme) => scheme.type === filter)

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


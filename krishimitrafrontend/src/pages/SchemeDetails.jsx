import { useParams, Link } from "react-router-dom"
import Layout from "../layout/layout"
import "./SchemeDetails.css"

const schemesData = [
  {
    id: 1,
    name: "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)",
    description: "Income support scheme for farmers.",
    type: "central",
    link: "https://pmkisan.gov.in",
    Description:
      " Launched in February 2019, PM-KISAN is a Central Sector Scheme by the Government of India aimed at providing income support to all landholding farmer families across the country. Under this scheme, eligible farmers receive financial assistance of ₹6,000 per year, disbursed in three equal installments of ₹2,000 each. The funds are directly transferred into the beneficiaries' bank accounts through the Direct Benefit Transfer (DBT) mode.",
       Eligibility:"Landholding Farmers: All families owning cultivable land as per land records of the respective State or Union Territory are eligible.",
        Required_Documents:" Aadhaar Card: Mandatory for identification.,	Proof_of_Citizenship, Documents such as Voter ID, Passport, or any other proof of citizenship.,	Land_Ownership_Documents, Records that establish ownership of cultivable land.,Bank_Account_Details: Active bank account information for DBT.GROWW.IN",
      Application_Process:"Online Registration: Farmers can register through the official PM-KISAN portal by providing the necessary details and uploading required documents.",
      Offline_Registration: "Alternatively, farmers can visit the local revenue office, Common Service Centers (CSCs), or the nodal officer for the scheme in their area to register.Verification: Post application, the details are verified by the respective authorities, and upon successful verification, the beneficiary list is updated, and funds are transferred accordingly."
  },


{
    id: 2,
    name: "Pradhan Mantri Kisan Maan-Dhan Yojana (PM-KMY)",
    description: "Income support scheme for farmers.",
    type: "central",
    link: " https://pmkmy.gov.in/",
    Description:" A pension scheme offering ₹3,000 monthly to small and marginal farmers upon reaching 60 years of age.",
       Eligibility:"Farmers aged 18-40 years. Cultivable land up to 2 hectares.",
       Required_Documents:"Aadhaar card, Bank account details, Landholding papers",
       Instructions:"Enrollment can be done at Common Service Centers (CSCs) or online through the scheme's portal."
  },

{
    id: 3,
    name: " Mukhyamantri Kisan Sahay Yojana",
    description: "Income support scheme for farmers.",
    type: "state",
    link: "https://www.myscheme.gov.in/schemes/mksy",
    Description:" Provides financial assistance to farmers facing crop loss due to natural calamities.",
       Eligibility:"All farmers in Gujarat cultivating notified crops.",
       Required_Documents:"Aadhaar card, Land ownership/tenancy documents, Bank account details",
       Instructions: "Farmers should report crop loss to local authorities and apply through the nearest agriculture office."
  },

]

function SchemeDetails() {
  const { id } = useParams()
  const scheme = schemesData.find((scheme) => scheme.id === Number.parseInt(id))

  if (!scheme) {
    return <div className="scheme-not-found">Scheme not found!</div>
  }

  return (
    <Layout>
      <div className="scheme-details-container">
        <h1 className="scheme-title">{scheme.name}</h1>
        <p className="scheme-description">{scheme.Description}</p>
        <p className="scheme-description">{scheme.Eligibility}</p>
        <p className="scheme-description">{scheme.Instructions}</p>
        Required_Documents
        <div className="scheme-info">
          <p>
            <strong>Type:</strong> <span className={`type ${scheme.type}`}>{scheme.type.toUpperCase()}</span>
          </p>
          <p>
            <strong>Details:</strong> {scheme.details}
          </p>
        </div>
        <div className="scheme-actions">
          <a href={scheme.link} target="_blank" rel="noopener noreferrer" className="official-link">
            Official Link
          </a>
          <Link to="/" className="back-button">
            Back to Home
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default SchemeDetails


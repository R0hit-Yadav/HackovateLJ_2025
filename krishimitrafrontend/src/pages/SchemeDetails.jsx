import { useParams, Link } from "react-router-dom"
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
    Eligibility: "Landholding Farmers: All families owning cultivable land as per land records of the respective State or Union Territory are eligible.",
    Required_Documents: " Aadhaar Card: Mandatory for identification.,	Proof_of_Citizenship, Documents such as Voter ID, Passport, or any other proof of citizenship.,	Land_Ownership_Documents, Records that establish ownership of cultivable land.,Bank_Account_Details: Active bank account information for DBT.GROWW.IN",
    Application_Process: "Online Registration: Farmers can register through the official PM-KISAN portal by providing the necessary details and uploading required documents.",
    Offline_Registration: "Alternatively, farmers can visit the local revenue office, Common Service Centers (CSCs), or the nodal officer for the scheme in their area to register.Verification: Post application, the details are verified by the respective authorities, and upon successful verification, the beneficiary list is updated, and funds are transferred accordingly."
  },


  {
    id: 2,
    name: "Pradhan Mantri Kisan Maan-Dhan Yojana (PM-KMY)",
    description: "Income support scheme for farmers.",
    type: "central",
    link: " https://pmkmy.gov.in/",
    Description: " A pension scheme offering ₹3,000 monthly to small and marginal farmers upon reaching 60 years of age.",
    Eligibility: "Farmers aged 18-40 years. Cultivable land up to 2 hectares.",
    Required_Documents: "Aadhaar card, Bank account details, Landholding papers",
    Instructions: "Enrollment can be done at Common Service Centers (CSCs) or online through the scheme's portal."
  },

  {
    id: 3,
    name: " Mukhyamantri Kisan Sahay Yojana",
    description: "Income support scheme for farmers.",
    type: "state",
    link: "https://www.myscheme.gov.in/schemes/mksy",
    Description: " Provides financial assistance to farmers facing crop loss due to natural calamities.",
    Eligibility: "All farmers in Gujarat cultivating notified crops.",
    Required_Documents: "Aadhaar card, Land ownership/tenancy documents, Bank account details",
    Instructions: "Farmers should report crop loss to local authorities and apply through the nearest agriculture office."
  },

  {
    id: 4,
    name: "Kera Suraksha Insurance Scheme",
    description: "the Ministry of Agriculture and Farmers Welfare and implemented by the Coconut Development Board",
    type: "central",
    link: "https://www.myscheme.gov.in/schemes/ksis",
    Description: "The scheme offers a sum assured of ₹7.00 lakhs for 24-hour accident-related risks, including death. The annual premium is ₹956, with ₹717 covered by the Board and ₹239 paid by the beneficiary via DD or online mode.",
    Eligibility: "Submission of claim form along with mandatory documents to Board, in case of accidents-related hospital expenses/death, for getting benefits under the scheme.",
    Required_Documents: "Aadhaar card, Land ownership/tenancy documents, Bank account details",
    Instructions: "Farmers should report crop loss to local authorities and apply through the nearest agriculture office."
  },

  {
    id: 5,
    name: "Gujarat Farm Mechanization Scheme",
    description: "Financial Assistance and subsidies",
    type: "state",
    link: "https://agri.gujarat.gov.in/",
    Description: "The Agriculture, Farmers Welfare and Co-operation Department of Gujarat Govt. takes care of agriculture and related matters in its charge like horticulture, soil conservation, dairy development, animal husbandry and formation of policies / schemes in co-operative activities as well as implementation, monitoring and supervision.",
    Eligibility: "All farmers in Gujarat cultivating notified crops.",
    Required_Documents: "Aadhaar card, Land ownership/tenancy documents, Bank account details",
    Instructions: "Farmers should report crop loss to local authorities and apply through the nearest agriculture office."
  },

  {
    id: 6,
    name: "Paramparagat Krishi Vikas Yojana (PKVY)",
    description: "Financial Assistance and subsidies",
    type: "central",
    link: "https://www.myscheme.gov.in/schemes/pkvy?utm_source=chatgpt.com",
    Description: "PKVY aims at supporting and promoting organic farming, in turn resulting in improvement of soil health. The scheme promotes Participatory Guarantee System (PGS) For India (PGS- India)2 form of organic certification that is built on mutual trust, locally relevant and mandates the involvement of producers and consumers in the process of certification.",
    Eligibility: "All farmers/institutions are eligible to apply. However, maximum land holding is 2 hectare",
    Required_Documents: "Aadhaar card, Land ownership/tenancy documents, Bank account details",
    Instructions: "Farmers should report crop loss to local authorities and apply through the nearest agriculture office."
  },

  {
    id: 7,
    name: "Pradhan Mantri Kaushal Vikas Yojana",
    description: "STT component imparted at PMKVY Training Centres (TC)",
    type: "central",
    link: " https://www.myscheme.gov.in/schemes/pmkvy-stt",
    Description: "The scheme shall promote fee-based courses in higher level skills and courses that are NSQF level 5 and above. Review of the courses under PMKVY 3.0 shall be carried out for introducing fees in popular courses with higher industry demand and above average wages. However, PMKVY 3.0 would continue to support weaker and marginalized sections of the society",
    Eligibility: "This scheme is applicable to any candidate of Indian nationality ",
    Required_Documents: "Aadhaar card, Land ownership/tenancy documents, Bank account details",
    Instructions: "Farmers should report crop loss to local authorities and apply through the nearest agriculture office."
  },

  {
    id: 8,
    name: "Pradhan Mantri Kisan Samman Nidhi",
    description: "The scheme aims to supplement the financial needs of all landholding farmers",
    type: "central",
    link: " https://www.myscheme.gov.in/schemes/pm-kisan",
    Description: " Under the scheme an amount of ₹ 6000/- per year is released by the Central Government online directly into the bank accounts of the eligible farmers under Direct Benefit Transfer mode, subject to certain exclusions. ",
    Eligibility: "All landholding farmers' families, which have cultivable land holding in their names are eligible to get benefit under the scheme.",
    Required_Documents: "Aadhaar card, Land ownership/tenancy documents, Bank account details",
    Instructions: "Farmers should report crop loss to local authorities and apply through the nearest agriculture office."
  },

  {
    id: 9,
    name: "Schemes of Gujarat Agriculture, Farmers Welfare & Co-operation Department",
    description: "AGR-61 Agro Service Providers for the purpose of making farming more profitable with the help of Farm Mechanization",
    type: "state",
    link: " https://agri.gujarat.gov.in/Home/SchemesDetailsPage?Id=6v6SCCcVaKzHbzUn5D4oSg==&domain=KQBjMeZAUYtrIgvpebJ01g==&utm_source=chatgpt.com",
    Description: " As the initial investment for adoption of mechanization in agriculture is high, Schedule Caste, Schedule Tribe, small and marginal farmers cannot afford to buy every farm implement/implement to adopt mechanization in agriculture.",
    Eligibility: "All farmers in Gujarat cultivating notified crops.",
    Required_Documents: "Aadhaar card, Land ownership/tenancy documents, Bank account details",
    Instructions: "Farmers should report crop loss to local authorities and apply through the nearest agriculture office."
  },

  {
    id: 10,
    name: "Farmer Registry Maharashtra (Agristack)",
    description: "Digital ID / registry for farmers in the state to streamline accessing benefits",
    type: "state",
    link: "https://farmerregistry.ind.in/?utm_source=chatgpt.com",
    Description: "The Agristack Maharashtra Farmer Registry 2025 is a groundbreaking initiative by the Government of Maharashtra to modernize agriculture and streamline services for farmers. This digital platform aims to create a centralized database of farmers, their landholdings, and agricultural practices, ensuring efficient delivery of government schemes and benefits. In this article, we’ll explore the key features, benefits, registration process, and FAQs related to the Agristack Maharashtra Farmer Registry.",
    Eligibility: "Maharashtra farmers who own or cultivate agricultural land and have an Aadhaar-linked bank account are eligible.",
    Required_Documents: "Aadhaar card, Land ownership/tenancy documents, Bank account details",
    Instructions: "Farmers should report crop loss to local authorities and apply through the nearest agriculture office."
  },

  {
    id: 11,
    name: "Pradhan Mantri Krishi Sinchayee Yojana: Per Drop More Crop",
    description: "launched by the Dept. of Agriculture & Farmers Welfare, Ministry of Agriculture & Farmers Welfare, Govt. of India on 1st July 2015",
    type: "central",
    link: " https://www.myscheme.gov.in/schemes/pmksypdmc",
    Description: "The scheme “Pradhan Mantri Krishi Sinchayee Yojana: Per Drop More Crop” was launched by the Dept. of Agriculture & Farmers Welfare, Ministry of Agriculture & Farmers Welfare, Govt. of India on 1st July 2015. The scheme mainly focuses on enhancing water use efficiency at the farm level through Micro Irrigation (Drip and Sprinkler Irrigation System)",
    Eligibility: "All the farmers of the State & Union Territory are eligible to take the benefits of this scheme.",
    Required_Documents: "Aadhaar card, Land ownership/tenancy documents, Bank account details",
    Instructions: "Farmers should report crop loss to local authorities and apply through the nearest agriculture office."
  },

  {
    id: 12,
    name: "Pradhan Mantri Fasal Bima Yojna (PMFBY)",
    description: "crop insurance scheme by the Department of Agriculture, Cooperation and Farmers’ Welfare, Ministry of Agriculture",
    type: "central",
    link: "https://www.myscheme.gov.in/schemes/pmfby",
    Description: "PMFBY provides crop insurance at a cost-effective premium to all Indian farmers. PMFBY is an affordable crop insurance product implemented through a network of insurance companies and banks. The scheme covers over 50 crore farmers and provides insurance coverage for over 50 different crops.",
    Eligibility: "All farmers, including tenant farmers and sharecroppers growing notified crops in notified areas.",
    Required_Documents: "Aadhaar card, Land ownership/tenancy documents, Bank account details",
    Instructions: "Farmers should report crop loss to local authorities and apply through the nearest agriculture office."
  },

  {
    id: 13,
    name: "Krishonnati Yojana - Sub Mission On Seed And Planting Material (SMSP)",
    description: "centrally sponsored scheme under the umbrella scheme of Green Revolution – Krishonnati Yojana",
    type: "central",
    link: "https://www.myscheme.gov.in/schemes/ky-smsp",
    Description: "Green Revolution – Krishonnati Yojana is an Umbrella Scheme for the agriculture sector that has been implemented since 2016-17 by clubbing several schemes/missions under one umbrella scheme. The Umbrella scheme comprises 11 Schemes/Missions.",
    Eligibility: "The applicant must be a Small or Marginal Farmer.",
    Required_Documents: "Aadhaar card, Land ownership/tenancy documents, Bank account details",
    Instructions: "Farmers should report crop loss to local authorities and apply through the nearest agriculture office."
  }

]

function SchemeDetails() {
  const { id } = useParams()
  const scheme = schemesData.find((scheme) => scheme.id === Number.parseInt(id))

  if (!scheme) {
    return <div className="scheme-not-found">Scheme not found!</div>
  }

  return (
    <div className="scheme-details-container">
      <h1 className="scheme-title">{scheme.name}</h1>

      <p className="scheme-description">{scheme.Description}</p>
      <p className="scheme-description"><strong>Eligibility:</strong> {scheme.Eligibility}</p>
      <p className="scheme-description"><strong>Required Documents:</strong> {scheme.Required_Documents}</p>
      <p className="scheme-description"><strong>Instructions:</strong> {scheme.Instructions}</p>

      <div className="scheme-info">
        <p>
          <strong>Type:</strong>{" "}
          <span className={`type ${scheme.type}`}>{scheme.type.toUpperCase()}</span>
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
  )
}

export default SchemeDetails


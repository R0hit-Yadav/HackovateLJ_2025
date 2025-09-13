import { useNavigate } from "react-router-dom";
import "./LabourAppointment.css"; // Import CSS file
import Layout from "../layout/layout";

const LabourAppointment = () => {
  const navigate = useNavigate();

  const farmers = [
    {
      id: "labour-ram-kumar",
      name: "राम कुमार",
      work: "खेती मजदूर",
      experience: "10 साल",
      rating: 4.5,
      availability: "आज उपलब्ध",
      image: "https://img.freepik.com/free-photo/agriculture-worker-harvesting-crops_23-2148973980.jpg",
      about: "राम कुमार 10 वर्षों से कृषि कार्य में अनुभव रखते हैं, और हर प्रकार के खेतों में काम कर सकते हैं।",
      fee: 300, // प्रतिदिन का शुल्क (रुपये में)
      qualifications: "अनुभवी खेत मजदूर",
    },
    {
      id: "labour-shyam-verma",
      name: "श्याम वर्मा",
      work: "फसल कटाई विशेषज्ञ",
      experience: "8 साल",
      rating: 4.6,
      availability: "कल उपलब्ध",
      image: "https://img.freepik.com/free-photo/farmer-working-rice-field_23-2148973990.jpg",
      about: "श्याम वर्मा विशेष रूप से धान, गेहूं और मक्का की कटाई में विशेषज्ञता रखते हैं।",
      fee: 350, // प्रतिदिन का शुल्क (रुपये में)
      qualifications: "कृषि कटाई विशेषज्ञ",
    },
    {
      id: "labour-mohan-das",
      name: "मोहन दास",
      work: "पशुपालन सहायक",
      experience: "12 साल",
      rating: 4.7,
      availability: "आज उपलब्ध",
      image: "https://img.freepik.com/free-photo/farmer-feeding-cows-farm_23-2148974002.jpg",
      about: "मोहन दास गाय, भैंस और बकरियों की देखभाल करने में निपुण हैं।",
      fee: 400, // प्रतिदिन का शुल्क (रुपये में)
      qualifications: "पशुपालन और दुग्ध उत्पादन विशेषज्ञ",
    },
    {
      id: "labour-raju-yadav",
      name: "राजू यादव",
      work: "सिंचाई और खेत प्रबंधन",
      experience: "7 साल",
      rating: 4.3,
      availability: "दो दिन बाद उपलब्ध",
      image: "https://img.freepik.com/free-photo/farmer-watering-field_23-2148974012.jpg",
      about: "राजू यादव सिंचाई प्रणाली और खेत की देखभाल में विशेषज्ञ हैं।",
      fee: 320, // प्रतिदिन का शुल्क (रुपये में)
      qualifications: "सिंचाई और खेती प्रबंधन विशेषज्ञ",
    },
    {
      id: "labour-hari-prasad",
      name: "हरी प्रसाद",
      work: "खाद और उर्वरक विशेषज्ञ",
      experience: "15 साल",
      rating: 4.8,
      availability: "आज उपलब्ध",
      image: "https://img.freepik.com/free-photo/farmer-spreading-fertilizer_23-2148974020.jpg",
      about: "हरी प्रसाद जैविक और रासायनिक खाद डालने में निपुण हैं।",
      fee: 450, // प्रतिदिन का शुल्क (रुपये में)
      qualifications: "खाद और उर्वरक विशेषज्ञ",
    },
  ];

  // Handle booking navigation
  const handleBookAppointment = (farmer) => {
    navigate('/book-appointment');
  };

  return (
    <Layout>
    <div className="appointment-page">
      <div className="container">
        {/* Farmers Grid */}
        <div className="grid-container">
          {farmers.map((farmer) => (
            <div key={farmer.id} className="farmer-card">
              <div className="image-container">
                <img src={farmer.image} alt={farmer.name} className="farmer-image" />
              </div>
              <div className="farmer-info">
                <h3>{farmer.name}</h3>
                <p className="specialty">{farmer.specialty}</p>
                <p className="experience">{farmer.experience} अनुभव</p>
                <p className="availability">{farmer.availability}</p>
                <p className="rating">⭐ {farmer.rating}</p>
                <button className="book-btn" onClick={() => handleBookAppointment(farmer)}>
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default LabourAppointment;
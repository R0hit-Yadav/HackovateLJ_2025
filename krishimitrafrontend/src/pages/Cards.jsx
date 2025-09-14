import React, { useEffect, useState } from "react";
import axios from "axios";
import './Cards.css';  // ✅ use new CSS

const CropCards = () => {
  const [selectedCrops, setSelectedCrops] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCrops = async () => {
      try {
        const phoneNo = localStorage.getItem("phone_no");
        let filtered = [];

        if (phoneNo) {
          const userRes = await axios.get(`http://127.0.0.1:8000/api/login/${phoneNo}/`);
          const userCrops = userRes.data.crops
            ? userRes.data.crops.split(",").map(c => c.trim())
            : [];

          const cropsRes = await axios.get("http://127.0.0.1:8000/api_crops/crops/");

          if (userCrops.length > 0) {
            filtered = cropsRes.data.filter(crop =>
              userCrops.includes(crop.crop_name)
            );
          } else {
            filtered = cropsRes.data.sort((a, b) => a.id - b.id).slice(0, 3);
          }
        }

        setSelectedCrops(filtered);
      } catch (err) {
        console.error("Error fetching crops:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCrops();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="crop-cards-page">
      <div className="container">
        <h1>Your Selected Crops</h1>
        <div className="cards-grid">
          {selectedCrops.length > 0 ? (
            selectedCrops.map(crop => (
              <div key={crop.id} className="card">
                <div className="card-header">
                  <h3>{crop.crop_name}</h3>
                </div>
                <div className="card-body">
                  <p><strong>🌱 Soil Type:</strong> {crop.soil_type}</p>
                  <p><strong>📖 Description:</strong> {crop.description}</p>
                  <p><strong>☁️ Weather:</strong> {crop.weather}</p>
                  <p><strong>🌾 Harvest Period:</strong> {crop.harvest_period}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No crops selected yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CropCards;

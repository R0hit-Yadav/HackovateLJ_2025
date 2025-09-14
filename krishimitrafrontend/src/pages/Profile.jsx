import React, { useState } from 'react';
import './Profile.css';
import axios from 'axios';

const CropForm = () => {
  const [formData, setFormData] = useState({
    state: '',
    city: '',
    crops: []
  });
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const cropOptions = [
    'Rice',
    'Wheat',
    'Corn',
    'Soybeans',
    'Barley',
    'Potatoes',
    'Tomatoes',
    'Onions',
    'Carrots',
    'Cabbage',
    'Peas',
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCropSelection = (crop) => {
    setFormData(prev => {
      const isSelected = prev.crops.includes(crop);
      const updatedCrops = isSelected
        ? prev.crops.filter(c => c !== crop)
        : [...prev.crops, crop];
      
      return {
        ...prev,
        crops: updatedCrops
      };
    });
  };

  const handleCancel = () => {
    setFormData({
      state: '',
      city: '',
      crops: []
    });
    setIsDropdownOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const phoneNo = localStorage.getItem("phone_no");
    if (!phoneNo) {
      alert("No phone number found, please login again.");
      return;
    }
    
    try {
    const res = await axios.patch(`http://127.0.0.1:8000/api/login/${phoneNo}/`, {
      state: formData.state,
      city: formData.city,
      crops: formData.crops.join(","), // store as comma-separated string
      phone_no: phoneNo
    });

    alert("Profile saved successfully!");
    console.log("Updated user:", res.data);

    // Optional: clear form after success
    setFormData({
      state: '',
      city: '',
      crops: []
    });
    setIsDropdownOpen(false);
    } catch (err) {
      console.error("Error updating user:", err.response?.data || err);
      alert("Failed to save profile, please try again.");
    }
  };

  const removeCrop = (cropToRemove) => {
    setFormData(prev => ({
      ...prev,
      crops: prev.crops.filter(crop => crop !== cropToRemove)
    }));
  };

  return (
    <div className="form-container">
      <h2>Farmer Profile Form </h2>
      <form onSubmit={handleSubmit} className="crop-form">
        <div className="form-group">
          <label htmlFor="state">State:</label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
            placeholder="Enter your state"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            placeholder="Enter your city"
            required
          />
        </div>

        <div className="form-group">
          <label>Crops:</label>
          <div className="dropdown-container">
            <div 
              className="dropdown-trigger"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span className="dropdown-text">
                {formData.crops.length > 0 
                  ? `${formData.crops.length} crop(s) selected`
                  : 'Select crops'
                }
              </span>
              <span className={`dropdown-arrow ${isDropdownOpen ? 'open' : ''}`}>
                ▼
              </span>
            </div>

            {isDropdownOpen && (
              <div className="dropdown-menu">
                {cropOptions.map((crop) => (
                  <div
                    key={crop}
                    className="dropdown-item"
                    onClick={() => handleCropSelection(crop)}
                  >
                    <span className="crop-name">{crop}</span>
                    {formData.crops.includes(crop) && (
                      <span className="checkmark">✓</span>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {formData.crops.length > 0 && (
            <div className="selected-crops">
              <p>Selected Crops:</p>
              <div className="crops-tags">
                {formData.crops.map((crop) => (
                  <span key={crop} className="crop-tag">
                    {crop}
                    <button
                      type="button"
                      className="remove-crop"
                      onClick={() => removeCrop(crop)}
                      aria-label={`Remove ${crop}`}
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="form-actions">
          <button type="submit" className="submit-btn">
            Submit
          </button>
          <button type="button" className="cancel-btn" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CropForm;
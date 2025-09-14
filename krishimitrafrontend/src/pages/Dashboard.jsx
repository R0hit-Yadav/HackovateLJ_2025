import React, { useState } from 'react';
import { User, Phone, Leaf, LogOut } from 'lucide-react';
import './Dashboard.css';

const Dashboard = () => {
  const [formData, setFormData] = useState({
    state: '',
    city: '',
    crops: []
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  const cropOptions = [
    'Rice','Wheat','Corn','Soybeans','Cotton','Sugarcane','Barley','Oats',
    'Potatoes','Tomatoes','Onions','Carrots','Cabbage','Spinach','Beans','Peas'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCropSelection = (crop) => {
    setFormData(prev => {
      const isSelected = prev.crops.includes(crop);
      return {
        ...prev,
        crops: isSelected
          ? prev.crops.filter(c => c !== crop)
          : [...prev.crops, crop]
      };
    });
  };

  const handleCancel = () => {
    setFormData({ state: '', city: '', crops: [] });
    setIsDropdownOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Form submitted! Check console for data.');
  };

  const removeCrop = (cropToRemove) => {
    setFormData(prev => ({
      ...prev,
      crops: prev.crops.filter(crop => crop !== cropToRemove)
    }));
  };

  const menuItems = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'cropdetails', label: 'Crop Details', icon: Leaf },
    { id: 'contact', label: 'Contact Us', icon: Phone },
  ];

  const NavItem = ({ item, isActive, onClick, isLogout = false }) => {
    const IconComponent = item.icon;
    return (
      <button
        className={`nav-item ${isActive ? 'active' : ''} ${isLogout ? 'logout' : ''}`}
        onClick={onClick}
      >
        <IconComponent size={20} />
        <span>{item.label}</span>
      </button>
    );
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="form-container">
            <h2>Farmer Profile Form</h2>
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
                        : 'Select crops'}
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
                <button type="submit" className="submit-btn">Submit</button>
                <button type="button" className="cancel-btn" onClick={handleCancel}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        );
      case 'contact':
        return (
          <div>
            <h1 className="section-title">Contact Us</h1>
            <div className="contact-form">
              <div className="form-group">
                <label>Name</label>
                <input className="form-input" type="text" placeholder="Your name" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input className="form-input" type="email" placeholder="Your email" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea className="form-input" placeholder="Your message" rows="5"></textarea>
              </div>
              <button className="btn-primary">Send Message</button>
            </div>
          </div>
        );
      default:
        return <div><h1 className="section-title">Page not found</h1></div>;
    }
  };

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-header">
          <h2>Profile</h2>
        </div>
        
        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <NavItem
              key={item.id}
              item={item}
              isActive={activeTab === item.id}
              onClick={() => setActiveTab(item.id)}
            />
          ))}
        </nav>
        
        <div className="sidebar-footer">
          <NavItem
            item={{ icon: LogOut, label: 'Logout' }}
            isLogout={true}
            onClick={() => console.log('Logout clicked')}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <header className="main-header">
          <h1>Welcome Back!</h1>
          <div className="user-info">
            <User size={32} />
            <span>John Doe</span>
          </div>
        </header>
        
        <main className="content-area">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;

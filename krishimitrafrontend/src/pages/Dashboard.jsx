import React, { useState } from 'react';
import { User, MessageCircle, Newspaper, Phone, Home, Settings, LogOut } from 'lucide-react';
import Layout from "../layout/layout";
import './profile.css'

const Dashboard = () => {
  
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
    'Cotton',
    'Sugarcane',
    'Barley',
    'Oats',
    'Potatoes',
    'Tomatoes',
    'Onions',
    'Carrots',
    'Cabbage',
    'Spinach',
    'Beans',
    'Peas'
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
  
  const [activeTab, setActiveTab] = useState('home');

  const styles = {
  dashboardContainer: {
    display: 'flex',
    height: '100vh',
    overflow: 'hidden',
    fontFamily: "'Inter', sans-serif",
    background: 'linear-gradient(to bottom, #f0fdf4, #fff)',
    color: '#111827',
  },
  sidebar: {
    width: '260px',
    background: 'linear-gradient(to bottom, #22c55e, #3b82f6)',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '2px 0 10px rgba(0,0,0,0.1)',
    position: 'relative',
    zIndex: 1000,
  },
  sidebarHeader: {
    padding: '2rem 1.5rem',
    borderBottom: '1px solid rgba(255,255,255,0.2)',
    textAlign: 'center',
  },
  sidebarHeaderTitle: {
    fontSize: '1.75rem',
    fontWeight: 700,
    color: 'white',
    margin: 0,
  },
  sidebarNav: {
    flex: 1,
    padding: '1rem 0',
    overflowY: 'auto',
  },
  navItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    width: '100%',
    padding: '1rem 1.5rem',
    background: 'none',
    border: 'none',
    color: 'rgba(255,255,255,0.9)',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontSize: '1rem',
    textAlign: 'left',
  },
  navItemHover: {
    background: 'rgba(255,255,255,0.15)',
    color: 'white',
  },
  navItemActive: {
    background: 'rgba(255,255,255,0.25)',
    color: 'white',
    borderRight: '4px solid white',
    fontWeight: 600,
  },
  sidebarFooter: {
    padding: '1rem 0',
    borderTop: '1px solid rgba(255,255,255,0.2)',
  },
  logoutBtn: {
    color: '#fca5a5',
  },
  mainContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  mainHeader: {
    background: '#fff',
    padding: '1.25rem 2rem',
    borderBottom: '1px solid #e5e7eb',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
  },
  mainHeaderTitle: {
    fontSize: '1.75rem',
    fontWeight: 700,
    color: '#111827',
  },
  userInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    color: '#374151',
    fontWeight: 500,
  },
  contentArea: {
    flex: 1,
    padding: '2rem',
    overflowY: 'auto',
    background: '#f9fafb',
  },
  contentSectionTitle: {
    fontSize: '2rem',
    fontWeight: 700,
    color: '#111827',
    marginBottom: '2rem',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem',
    marginBottom: '2rem',
  },
  statCard: {
    background: 'white',
    padding: '2rem',
    borderRadius: '1rem',
    border: '1px solid #f3f4f6',
    boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
    transition: 'all 0.3s ease',
  },
  statCardTitle: {
    color: '#6b7280',
    fontSize: '1rem',
    fontWeight: 500,
    marginBottom: '0.5rem',
  },
  statNumber: {
    fontSize: '2.25rem',
    fontWeight: 700,
    color: '#16a34a',
  },
  profileCard: {
    background: 'white',
    padding: '2.5rem',
    borderRadius: '1rem',
    boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
    maxWidth: '600px',
  },
  profileAvatar: {
    background: 'linear-gradient(to right, #22c55e, #3b82f6)',
    color: 'white',
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  btnPrimary: {
    background: 'linear-gradient(to right, #22c55e, #3b82f6)',
    color: 'white',
    border: 'none',
    padding: '0.75rem 1.5rem',
    borderRadius: '9999px',
    fontSize: '1rem',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    marginTop: '1rem',
  },
  btnPrimaryHover: {
    transform: 'scale(1.05)',
    boxShadow: '0 6px 15px rgba(0,0,0,0.2)',
  },
  newsItem: {
    background: 'white',
    padding: '1.5rem',
    borderRadius: '1rem',
    boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
    borderLeft: '4px solid #22c55e',
  },
  formInput: {
    width: '100%',
    padding: '0.75rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.5rem',
    fontSize: '1rem',
    fontFamily: 'inherit',
    transition: 'border-color 0.3s ease',
    boxSizing: 'border-box',
  },
};

  const menuItems = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'contact', label: 'Contact Us', icon: Phone },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const NavItem = ({ item, isActive, onClick, isLogout = false }) => {
    const [isHovered, setIsHovered] = useState(false);
    const IconComponent = item.icon;
    
    let itemStyle = { ...styles.navItem };
    if (isActive) itemStyle = { ...itemStyle, ...styles.navItemActive };
    if (isHovered) itemStyle = { ...itemStyle, ...styles.navItemHover };
    if (isLogout) itemStyle = { ...itemStyle, ...styles.logoutBtn };

    return (
      <button
        style={itemStyle}
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
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
      case 'contact':
        return (
          <div>
            <h1 style={styles.contentSectionTitle}>Contact Us</h1>
            <div style={styles.contactForm}>
              <div style={styles.formGroup}>
                <label style={styles.formLabel}>Name</label>
                <input style={styles.formInput} type="text" placeholder="Your name" />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.formLabel}>Email</label>
                <input style={styles.formInput} type="email" placeholder="Your email" />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.formLabel}>Message</label>
                <textarea style={{ ...styles.formInput, minHeight: '100px' }} placeholder="Your message" rows="5"></textarea>
              </div>
              <button style={styles.btnPrimary}>Send Message</button>
            </div>
          </div>
        );
      case 'settings':
        return (
          <div>
            <h1 style={styles.contentSectionTitle}>Settings</h1>
            <div style={styles.settingsSection}>
              <h3 style={{ color: '#2c3e50', marginBottom: '1.5rem', fontSize: '1.3rem' }}>General Settings</h3>
              <div style={styles.settingItem}>
                <label style={styles.settingLabel}>
                  <input type="checkbox" />
                  Enable notifications
                </label>
              </div>
              <div style={styles.settingItem}>
                <label style={styles.settingLabel}>
                  <input type="checkbox" />
                  Dark mode
                </label>
              </div>
              <button style={styles.btnPrimary}>Save Settings</button>
            </div>
          </div>
        );
      default:
        return <div><h1 style={styles.contentSectionTitle}>Page not found</h1></div>;
    }
  };

  return (
    <Layout>
    <div style={styles.dashboardContainer}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <div style={styles.sidebarHeader}>
          <h2 style={styles.sidebarHeaderTitle}>Profile</h2>
        </div>
        
        <nav style={styles.sidebarNav}>
          {menuItems.map((item) => (
            <NavItem
              key={item.id}
              item={item}
              isActive={activeTab === item.id}
              onClick={() => setActiveTab(item.id)}
            />
          ))}
        </nav>
        
        <div style={styles.sidebarFooter}>
          <NavItem
            item={{ icon: LogOut, label: 'Logout' }}
            isLogout={true}
            onClick={() => console.log('Logout clicked')}
          />
        </div>
      </div>

      {/* Main Content */}
      <div style={styles.mainContent}>
        <header style={styles.mainHeader}>
          <h1 style={styles.mainHeaderTitle}>Welcome Back!</h1>
          <div style={styles.userInfo}>
            <User size={32} />
            <span>John Doe</span>
          </div>
        </header>
        
        <main style={styles.contentArea}>
          {renderContent()}
        </main>
      </div>
    </div>
    </Layout>
  );
};

export default Dashboard;
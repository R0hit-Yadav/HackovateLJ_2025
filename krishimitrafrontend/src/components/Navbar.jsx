import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Home, 
  Cloud, 
  MessageCircle, 
  Activity, 
  User, 
  ChevronDown,
  Menu,
  X,
  Leaf,
  Newspaper,
  BookOpen,
  Calendar,
  Award
} from "lucide-react";
import "./Navbar.css";
import logo2 from "./logo2.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setShowMore(!showMore);
  const handleNavigate = (path) => {
    navigate(path);
    setIsOpen(false);
    setShowMore(false);
  };

  const mainNavItems = [
    { path: "/home", label: "Home", icon: <Home size={18} />, hindi: "होम" },
    { path: "/weather", label: "Weather", icon: <Cloud size={18} />, hindi: "मौसम" },
    { path: "/chatbot", label: "Chat Assistant", icon: <MessageCircle size={18} />, hindi: "सहायक" },
    { path: "/PlantDiseasePrediction", label: "Diagnosis", icon: <Activity size={18} />, hindi: "निदान" }
  ];

  const dropdownItems = [
    { path: "/scheme", label: "Schemes", icon: <Award size={16} />, hindi: "योजनाएं" },
    { path: "/news", label: "News", icon: <Newspaper size={16} />, hindi: "समाचार" },
    { path: "/learning", label: "Learning", icon: <BookOpen size={16} />, hindi: "शिक्षा" },
    { path: "/appointment", label: "Services", icon: <Calendar size={16} />, hindi: "सेवाएं" }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-content">
        {/* Logo Section */}
        <div className="logo-section" onClick={() => handleNavigate("/")}>
          <div className="logo-icon-nav">
            <img src={logo2} alt="Logo2" className="logo-icon" />
          </div>
          <div className="logo-text">
            <span className="logo-main">KrishiMitra</span>
            <span className="logo-tagline">Har Kisan ka Digital Saathi</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="desktop-nav">
          <ul className="nav-links">
            {mainNavItems.map((item) => (
              <li key={item.path}>
                <button 
                  onClick={() => handleNavigate(item.path)} 
                  className="nav-btn"
                  aria-label={item.label}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-text">
                    <span className="nav-english">{item.label}</span>
                    <span className="nav-hindi">{item.hindi}</span>
                  </span>
                </button>
              </li>
            ))}

            {/* More Dropdown */}
            <li className="dropdown">
              <button 
                className="dropdown-btn" 
                onClick={toggleDropdown}
                aria-expanded={showMore}
              >
                <span className="nav-text">
                  <span className="nav-english">More</span>
                  <span className="nav-hindi">अधिक</span>
                </span>
                <ChevronDown 
                  size={16} 
                  className={`dropdown-arrow ${showMore ? 'rotated' : ''}`} 
                />
              </button>
              
              {showMore && (
                <div className="dropdown-menu">
                  {dropdownItems.map((item) => (
                    <button
                      key={item.path}
                      onClick={() => handleNavigate(item.path)}
                      className="dropdown-item"
                    >
                      <span className="dropdown-icon">{item.icon}</span>
                      <div className="dropdown-text">
                        <span className="dropdown-english">{item.label}</span>
                        <span className="dropdown-hindi">{item.hindi}</span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </li>
          </ul>

          {/* Login Button */}
          <button 
            onClick={() => handleNavigate("/dashboard")} 
            className="sign-in-button"
          >
            <User size={16} />
            <span>User</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="menu-toggle" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${isOpen ? 'active' : ''}`}>
        <div className="mobile-nav-content">
          {/* Main Navigation Items */}
          <div className="mobile-nav-section">
            <h3 className="mobile-section-title">मुख्य सेवाएं</h3>
            {mainNavItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigate(item.path)}
                className="mobile-nav-item"
              >
                <span className="mobile-nav-icon">{item.icon}</span>
                <div className="mobile-nav-text">
                  <span className="mobile-english">{item.label}</span>
                  <span className="mobile-hindi">{item.hindi}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Additional Services */}
          <div className="mobile-nav-section">
            <h3 className="mobile-section-title">अतिरिक्त सेवाएं</h3>
            {dropdownItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigate(item.path)}
                className="mobile-nav-item"
              >
                <span className="mobile-nav-icon">{item.icon}</span>
                <div className="mobile-nav-text">
                  <span className="mobile-english">{item.label}</span>
                  <span className="mobile-hindi">{item.hindi}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Mobile Login */}
          <div className="mobile-login-section">
            <button 
              onClick={() => handleNavigate("/login")} 
              className="mobile-login-btn"
            >
              <User size={20} />
              <span>Login / लॉगिन</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isOpen && <div className="mobile-overlay" onClick={toggleMenu}></div>}
    </nav>
  );
};

export default Navbar;
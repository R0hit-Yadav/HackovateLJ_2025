import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Cloud, Leaf, MessageCircle, Newspaper, MapPin, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';
import './Landingpage.css';
import logo from "./logo.png";
import logo2 from "./logo2.png";

const KrishimitraLanding = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselImages = [
    {
      url: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1200&h=600&fit=crop",
      title: "Smart Farming Solutions",
      subtitle: "Empowering farmers with AI-driven insights"
    },
    {
      url: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&h=600&fit=crop",
      title: "Precision Agriculture",
      subtitle: "Optimize your crop yield with data-driven decisions"
    },
    {
      url: "https://images.pexels.com/photos/96715/pexels-photo-96715.jpeg?_gl=1*1gxotth*_ga*OTEyMjA4NDA3LjE3NTI5MDQyNzc.*_ga_8JE65Q40S6*czE3NTc3NTA1NjIkbzIkZzEkdDE3NTc3NTA2MTAkajEyJGwwJGgw",
      title: "Disease Detection",
      subtitle: "Early identification for healthier crops"
    }
  ];

  const features = [
    {
      icon: <Cloud className="icon blue" />,
      title: "Weather Forecast",
      description: "Get accurate weather predictions for better farming decisions",
      color: "blue",
      page: "/weather"
    },
    {
      icon: <Leaf className="icon green" />,
      title: "Plant Disease Detection",
      description: "AI-powered disease identification to protect your crops",
      color: "green",
      page: "/disease-detection"
    },
    {
      icon: <MessageCircle className="icon purple" />,
      title: "AI Chatbot",
      description: "Get instant farming advice and solutions 24/7",
      color: "purple",
      page: "/chatbot"
    },
    {
      icon: <Newspaper className="icon orange" />,
      title: "Agricultural News",
      description: "Stay updated with latest farming trends and market prices",
      color: "orange",
      page: "/news"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const handleCardClick = (page) => {
    alert(`Redirecting to ${page}`);
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className="landing">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="logo-section">
              <img src={logo} alt="Logo" className="logo-icon" />
            <div>
              <h1 className="logo-title">KrishiMitra</h1>
              <span className='logo-subtitle'><i> - Har Kisan ka Digital Saathi</i></span>
            </div>
          </div>
        </div>
      </header>

      {/* Welcome Section */}
      <section className="welcome">
        <div className="welcome-inner">
          <h2 className="welcome-title animate-fade-in">Welcome to KrishiMitra</h2>
          <p className="welcome-subtitle">Revolutionizing Agriculture with Smart Technology</p>
          <div className="welcome-tags">
            <span>🌱 Smart Farming</span>
            <span>🤖 AI Powered</span>
            <span>📈 Increase Yield</span>
          </div>
        </div>
      </section>

      {/* Carousel */}
      <section className="carousel">
        <div className="carousel-container">
          <div className="carousel-wrapper">
            {carouselImages.map((image, index) => (
              <div
                key={index}
                className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
              >
                <img src={image.url} alt={image.title} />
                <div className="carousel-overlay">
                  <div className="carousel-text">
                    <h3>{image.title}</h3>
                    <p>{image.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <button onClick={prevSlide} className="carousel-btn left">
            <ChevronLeft />
          </button>
          <button onClick={nextSlide} className="carousel-btn right">
            <ChevronRight />
          </button>

          {/* Indicators */}
          <div className="carousel-indicators">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                className={index === currentSlide ? 'active' : ''}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <div className="features-header">
          <h2>Our Smart Solutions</h2>
          <p>Comprehensive tools designed to boost your agricultural productivity and profitability</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card" onClick={() => handleCardClick(feature.page)}>
              <div className={`feature-icon ${feature.color}`}>{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <div className="feature-learn">
                <span>Learn More</span>
                <ChevronRight className="small-icon" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Login */}
      <section className="login-section">
        <div className="login-inner">
          <h2>Ready to Transform Your Farming?</h2>
          <p>Join thousands of farmers who are already using KrishiMitra to increase their yields and profits</p>
          <button onClick={handleLoginClick}>Get Started Today</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-logo">
            {/* <div className="logo-circle small"> */}
              <img src={logo2} alt="Logo2" className="logo-icon" />
            {/* </div> */}
            <h3>KrishiMitra</h3>
            <p>Empowering farmers with cutting-edge technology and AI-driven insights.</p>
            <div className="socials">
              <Facebook />
              <Twitter />
              <Instagram />
            </div>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li>Weather Forecast</li>
              <li>Disease Detection</li>
              <li>AI Chatbot</li>
              <li>Agricultural News</li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <p><MapPin /> Gujarat, India</p>
            <p><Phone /> +91 12345 67890</p>
            <p><Mail /> info@krishimitra.com</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 KrishiMitra. All rights reserved. Made with ❤️ for farmers.</p>
        </div>
      </footer>
    </div>
  );
};

export default KrishimitraLanding;

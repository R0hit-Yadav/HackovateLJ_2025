import React from "react";
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Cloud, Leaf, MessageCircle, Newspaper, MapPin, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';
import "./Footer.css";
import logo2 from "./logo2.png";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="footer">
        <div className="footer-grid">
          <div className="footer-logo">
              <img src={logo2} alt="Logo2" className="logo-icon" />
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
              <li style={{cursor: 'pointer'}} onClick={() => navigate('/weather')}>Weather Forecast</li>
              <li style={{cursor: 'pointer'}} onClick={() => navigate('/PlantDiseasePrediction')}>Disease Detection</li>
              <li style={{cursor: 'pointer'}} onClick={() => navigate('/chatbot')}>AI Chatbot</li>
              <li style={{cursor: 'pointer'}} onClick={() => navigate('/news')}>Agricultural News</li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <p><MapPin /> Gujarat, India</p>
            <p><Phone /> +91 91736 97510</p>
            <p><Mail /> info@krishimitra.com</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 KrishiMitra. All rights reserved. Made with ❤️ for farmers.</p>
        </div>
      </footer>
  );
};

export default Footer;
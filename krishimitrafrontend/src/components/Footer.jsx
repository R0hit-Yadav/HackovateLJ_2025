import React from "react";
import { ChevronLeft, ChevronRight, Cloud, Leaf, MessageCircle, Newspaper, MapPin, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';
import "./Footer.css";
import logo2 from "./logo2.png";

const Footer = () => {
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
  );
};

export default Footer;
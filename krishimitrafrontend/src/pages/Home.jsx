import Layout from "../layout/layout";
import Carousel from "../components/Carousel";
import { AlertCircle, Cloud, MessageCircle, Leaf, TrendingUp, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import "./Home.css"

const Home = () => {
    const navigate = useNavigate();

    const handleCardClick = (route) => {
        navigate(route);
    };

    const cards = [
        {
            title: "Crop Disease Detection",
            description: "AI-powered instant diagnosis of crop diseases. Upload photos and get immediate treatment recommendations with 95% accuracy.",
            icon: <AlertCircle size={32} />,
            colorClass: "disease-card",
            route: "/PlantDiseasePrediction",
            stats: "95% Accuracy"
        },
        {
            title: "Weather Forecast",
            description: "Precise 10-day weather predictions tailored for farmers. Get alerts for rainfall, temperature changes, and optimal farming conditions.",
            icon: <Cloud size={32} />,
            colorClass: "weather-card",
            route: "/weather",
            stats: "10-Day Forecast"
        },
        {
            title: "Farm Assistant",
            description: "24/7 AI farming expert in Hindi, English. Get personalized advice for crops, irrigation, and agricultural practices.       ",
            icon: <MessageCircle size={32} />,
            colorClass: "chatbot-card",
            route: "/chatbot",
            stats: "2 Languages"
        }
    ];

    const features = [
        {
            icon: <Leaf size={24} />,
            title: "Smart Farming",
            description: "Data-driven agricultural solutions"
        },
        {
            icon: <TrendingUp size={24} />,
            title: "Increase Yield",
            description: "Boost productivity by up to 40%"
        },
        {
            icon: <Users size={24} />,
            title: "Expert Support",
            description: "24/7 agricultural guidance"
        }
    ];

    return (
        <Layout>
            {/* Hero Section */}
            <div className="hero-section">
                <div className="hero-content">
                    <h1 className="main-heading">
                        <span className="greeting">नमस्ते किसान</span>
                        <span className="tagline">Your Digital Farming Companion</span>
                    </h1>
                    <p className="hero-description">
                        Empowering farmers with AI-powered solutions for better crops, higher yields, and smarter farming decisions.
                    </p>
                    
                    {/* Feature Pills */}
                    <div className="feature-pills">
                        {features.map((feature, index) => (
                            <div key={index} className="feature-pill">
                                <div className="pill-icon">{feature.icon}</div>
                                <div className="pill-content">
                                    <span className="pill-title">{feature.title}</span>
                                    <span className="pill-description">{feature.description}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <div className="services-section">
                <div className="section-header">
                    <h2 className="section-title">किसान सेवाएं</h2>
                    <p className="section-subtitle">Choose the service that best helps your farming needs</p>
                </div>

                <div className="cards-grid">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className={`service-card ${card.colorClass}`}
                            onClick={() => handleCardClick(card.route)}
                        >
                            {/* Card Header */}
                            <div className="card-header">
                                <div className="icon-wrapper">
                                    {card.icon}
                                </div>
                                <div className="stats-badge">{card.stats}</div>
                            </div>

                            {/* Card Body */}
                            <div className="card-body">
                                <h3 className="card-title">{card.title}</h3>
                                <p className="card-description">{card.description}</p>
                                
                                <div className="card-action">
                                    <span className="action-text">Get Started</span>
                                    <div className="action-arrow">→</div>
                                </div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="card-decoration">
                                <div className="deco-circle deco-1"></div>
                                <div className="deco-circle deco-2"></div>
                                <div className="deco-circle deco-3"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Stats Section */}
            <div className="stats-section">
                <div className="stats-container">
                    <div className="stat-item">
                        <div className="stat-number">50K+</div>
                        <div className="stat-label">Happy Farmers</div>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <div className="stat-number">2M+</div>
                        <div className="stat-label">Crops Analyzed</div>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <div className="stat-number">40%</div>
                        <div className="stat-label">Yield Increase</div>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <div className="stat-number">24/7</div>
                        <div className="stat-label">Support Available</div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Home;
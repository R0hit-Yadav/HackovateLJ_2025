import React, { useState, useEffect } from "react";
import "./Carousel.css"; // Import the CSS file

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://www.agrivi.com/wp-content/uploads/2014/10/wepik-photo-mode-2022722-16315.jpeg", // Add your image URLs
    "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFncmljdWx0dXJlfGVufDB8fDB8fHww",
    "https://c1.wallpaperflare.com/preview/825/623/772/rice-nature-food-plant.jpg",
    "https://png.pngtree.com/background/20211215/original/pngtree-agricultural-production-summer-solstice-farmer-rice-field-planting-photography-map-with-picture-image_1500018.jpg",
    "https://png.pngtree.com/thumb_back/fh260/background/20210902/pngtree-agricultural-technology-mobile-phone-synthesis-background-image_784693.jpg",
    "https://images.squarespace-cdn.com/content/v1/5e60f802a05fa52749946e5e/1619696819143-EF4KM7XYHST251O4OYST/agriculture-tech.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval); // Clean up on component unmount
  }, [images.length]);

  return (
    <div className="carousel-container">
      <div
        className="carousel-slide"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div className="carousel-item" key={index}>
            <img src={image} alt={`Carousel ${index}`} className="carousel-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

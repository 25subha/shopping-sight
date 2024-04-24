// AutoSlider.js
import React, { useState, useEffect } from 'react';
import '../styles/autoSlider.css'

const images = [
  'https://media.istockphoto.com/id/1333701971/photo/corporate-identity.jpg?s=1024x1024&w=is&k=20&c=R3VAu-PPjVlGsK4aMAe5VycVUU15skrUOXWNvwCM7Sw=',
  'https://media.istockphoto.com/id/1342581601/vector/global-network-connection-world-map-asia-continent-point-line-worldwide-information.jpg?s=1024x1024&w=is&k=20&c=90cH5rlNT-ldcbYm1F9dLIhcgHYxT0LX3mtsJIkVpCI=',
  'https://media.istockphoto.com/id/1372984012/vector/happy-holi-festival-banner-template-with-holi-powder-color-bowls-on-multicolor-background.jpg?s=1024x1024&w=is&k=20&c=gDqkhw76zVtoLl6hyx3tW_AuyJbEkth2AMyF53L9FRA=',
  // Add more image URLs as needed
];

const AutoSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="auto-slider">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? 'active' : ''}`}
        >
          <img src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default AutoSlider;

import * as React from "react"
import { useState, useEffect } from "react"
import { withPrefix } from "gatsby"
import colors from "../styles/colors"

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  
  // Auto-rotate carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    
    return () => clearInterval(interval)
  }, [currentIndex])
  
  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
      setTimeout(() => setIsTransitioning(false), 500)
    }
  }
  
  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true)
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
      setTimeout(() => setIsTransitioning(false), 500)
    }
  }
  
  const goToSlide = (index) => {
    if (!isTransitioning && index !== currentIndex) {
      setIsTransitioning(true)
      setCurrentIndex(index)
      setTimeout(() => setIsTransitioning(false), 500)
    }
  }
  
  const containerStyle = {
    position: "relative",
    width: "100%",
    overflow: "hidden",
    borderRadius: "12px",
    boxShadow: `0 8px 30px rgba(0, 0, 0, 0.12)`,
    marginBottom: "2rem",
    backgroundColor: colors.darkBlue,
    height: "400px",
  }
  
  const slideContainerStyle = {
    display: "flex",
    height: "100%",
    transition: "transform 0.5s ease-in-out",
    transform: `translateX(-${currentIndex * 100}%)`,
  }
  
  const slideStyle = {
    minWidth: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    transition: "opacity 0.5s ease-in-out",
  }
  
  const buttonStyle = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    backgroundColor: `rgba(255, 255, 255, 0.2)`,
    color: colors.white,
    border: "none",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.5rem",
    cursor: "pointer",
    transition: "background-color 0.3s ease, transform 0.3s ease",
    zIndex: "2",
    backdropFilter: "blur(4px)",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    "&:hover": {
      backgroundColor: `rgba(255, 255, 255, 0.3)`,
      transform: "translateY(-50%) scale(1.05)",
    },
    "&:active": {
      transform: "translateY(-50%) scale(0.95)",
    },
  }
  
  const prevButtonStyle = {
    ...buttonStyle,
    left: "20px",
  }
  
  const nextButtonStyle = {
    ...buttonStyle,
    right: "20px",
  }
  
  const dotsContainerStyle = {
    position: "absolute",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    gap: "10px",
    zIndex: "2",
  }
  
  const dotStyle = (isActive) => ({
    width: isActive ? "12px" : "10px",
    height: isActive ? "12px" : "10px",
    borderRadius: "50%",
    backgroundColor: isActive ? colors.cyan : colors.white,
    opacity: isActive ? 1 : 0.6,
    cursor: "pointer",
    transition: "all 0.3s ease",
    transform: isActive ? "scale(1.2)" : "scale(1)",
  })
  
  const captionStyle = {
    position: "absolute",
    bottom: "60px",
    left: "0",
    width: "100%",
    textAlign: "center",
    color: colors.white,
    padding: "0 20px",
    zIndex: "2",
  }
  
  const overlayStyle = {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 60%)",
    zIndex: "1",
  }

  return (
    <div style={containerStyle}>
      <div style={overlayStyle}></div>
      
      <div style={slideContainerStyle}>
        {images.map((image, index) => (
          <div
            key={index}
            style={{
              ...slideStyle,
              backgroundImage: `url(${withPrefix(image.src)})`,
            }}
          ></div>
        ))}
      </div>
      
      <button style={prevButtonStyle} onClick={prevSlide}>
        &#10094;
      </button>
      <button style={nextButtonStyle} onClick={nextSlide}>
        &#10095;
      </button>
      
      <div style={captionStyle}>
        <h3 style={{ margin: "0 0 5px 0", fontSize: "1.4rem" }}>
          {images[currentIndex].title}
        </h3>
        <p style={{ margin: 0, fontSize: "1rem", opacity: 0.9 }}>
          {images[currentIndex].description}
        </p>
      </div>
      
      <div style={dotsContainerStyle}>
        {images.map((_, index) => (
          <div
            key={index}
            style={dotStyle(index === currentIndex)}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default ImageCarousel
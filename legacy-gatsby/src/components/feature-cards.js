import * as React from "react"
import { useState, useEffect } from "react"
import colors from "../styles/colors"

const FeatureCard = ({ title, description, icon, completed }) => {
  const [isHovered, setIsHovered] = useState(false)
  
  const cardStyle = {
    backgroundColor: isHovered ? colors.lightGray : colors.white,
    borderRadius: "8px",
    boxShadow: `0 4px 12px rgba(0, 0, 0, 0.08)`,
    padding: "1.5rem",
    marginBottom: "1.5rem",
    transition: "all 0.3s ease",
    transform: isHovered ? "translateY(-3px)" : "translateY(0)",
    border: `1px solid ${isHovered ? colors.cyan : "transparent"}`,
    position: "relative",
    overflow: "hidden",
  }
  
  const titleStyle = {
    color: colors.darkBlue,
    fontSize: "1.3rem",
    marginBottom: "0.8rem",
    display: "flex",
    alignItems: "center",
  }
  
  const iconStyle = {
    color: colors.blueCyan,
    marginRight: "10px",
    fontSize: "1.5rem",
  }
  
  const descriptionStyle = {
    color: colors.midBlue,
    lineHeight: "1.6",
  }
  
  const statusBarStyle = {
    height: "4px",
    width: "100%",
    backgroundColor: colors.lightGray,
    borderRadius: "2px",
    marginTop: "1rem",
    position: "relative",
    overflow: "hidden",
  }
  
  const progressStyle = {
    position: "absolute",
    top: "0",
    left: "0",
    height: "100%",
    backgroundColor: completed ? colors.lightCyan : colors.blueCyan,
    width: completed ? "100%" : "0%",
    transition: "width 1s ease-in-out",
  }
  
  const statusBadgeStyle = {
    position: "absolute",
    top: "1rem",
    right: "1rem",
    padding: "0.3rem 0.7rem",
    borderRadius: "20px",
    fontSize: "0.8rem",
    fontWeight: "bold",
    backgroundColor: completed ? colors.lightCyan : colors.blueCyanDimmed,
    color: completed ? colors.darkBlue : colors.white,
  }
  
  // Animation effect for the progress bar
  useEffect(() => {
    const timeout = setTimeout(() => {
      const progressElement = document.getElementById(`progress-${title.replace(/\s+/g, '-').toLowerCase()}`);
      if (progressElement) {
        progressElement.style.width = completed ? "100%" : "70%";
      }
    }, 300);
    
    return () => clearTimeout(timeout);
  }, [title, completed]);
  
  return (
    <div 
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={titleStyle}>
        <span style={iconStyle}>{icon}</span>
        {title}
      </div>
      <p style={descriptionStyle}>{description}</p>
      <div style={statusBarStyle}>
        <div 
          id={`progress-${title.replace(/\s+/g, '-').toLowerCase()}`}
          style={progressStyle} 
        />
      </div>
      <div style={statusBadgeStyle}>
        {completed ? "Completed" : "In Progress"}
      </div>
    </div>
  )
}

const FeatureCards = ({ features }) => {
  return (
    <div style={{ marginTop: "2rem" }}>
      {features.map((feature, index) => (
        <FeatureCard 
          key={index}
          title={feature.title}
          description={feature.description}
          icon={feature.icon}
          completed={feature.completed}
        />
      ))}
    </div>
  )
}

export default FeatureCards
import * as React from "react"
import { useState } from "react"
import colors from "../styles/colors"

const TimelineItem = ({ position, date, title, features, isActive, setActiveItem, index }) => {
  const isLeft = position === "left"
  
  const containerStyle = {
    padding: "10px 40px",
    position: "relative",
    backgroundColor: "inherit",
    width: "50%",
    marginBottom: "30px",
    left: isLeft ? "0" : "50%",
    cursor: "pointer",
    transition: "transform 0.3s ease",
    transform: isActive ? "scale(1.03)" : "scale(1)",
  }
  
  const dotStyle = {
    content: '""',
    position: "absolute",
    width: "25px",
    height: "25px",
    right: isLeft ? "-12px" : "auto",
    left: isLeft ? "auto" : "-12px",
    backgroundColor: isActive ? colors.cyan : colors.blueCyan,
    border: `4px solid ${colors.white}`,
    top: "15px",
    borderRadius: "50%",
    zIndex: "1",
    transition: "background-color 0.3s ease, transform 0.3s ease",
    transform: isActive ? "scale(1.2)" : "scale(1)",
  }
  
  const contentStyle = {
    padding: "20px 30px",
    backgroundColor: isActive ? colors.lightGray : colors.white,
    position: "relative",
    borderRadius: "6px",
    boxShadow: isActive 
      ? `0 5px 15px rgba(0, 0, 0, 0.15), 0 0 0 2px ${colors.cyan}`
      : "0 2px 10px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease",
    borderLeft: isActive ? `4px solid ${colors.cyan}` : "none",
  }
  
  const titleStyle = {
    color: colors.darkBlue,
    marginBottom: "0.5rem",
    transition: "color 0.3s ease",
    fontSize: "1.3rem",
  }
  
  const dateStyle = {
    color: isActive ? colors.blueCyan : colors.blueCyanDimmed,
    fontWeight: "500",
    fontSize: "0.9rem",
    marginBottom: "1rem",
    display: "inline-block",
  }
  
  const featureItemStyle = {
    marginBottom: "0.5rem",
    transition: "transform 0.3s ease",
    transformOrigin: "left",
  }

  return (
    <div 
      style={containerStyle}
      onClick={() => setActiveItem(index)}
      onMouseEnter={() => setActiveItem(index)}
    >
      <div style={dotStyle}></div>
      <div style={contentStyle}>
        <h3 style={titleStyle}>{title}</h3>
        <small style={dateStyle}>{date}</small>
        <ul style={{ padding: "0 0 0 1.2rem" }}>
          {features.map((feature, i) => (
            <li 
              key={i} 
              style={{
                ...featureItemStyle,
                transform: isActive ? "translateX(5px)" : "none",
                transitionDelay: `${i * 0.05}s`,
              }}
            >
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const RoadmapTimeline = ({ timelineData }) => {
  const [activeItem, setActiveItem] = useState(0)
  
  const containerStyle = {
    position: "relative",
    maxWidth: "1000px",
    margin: "0 auto",
    paddingTop: "20px",
  }
  
  const timelineStyle = {
    position: "relative",
    padding: "0 10px",
  }
  
  const lineStyle = {
    content: '""',
    position: "absolute",
    width: "4px",
    backgroundColor: colors.blueCyan,
    backgroundImage: `linear-gradient(${colors.blueCyan}, ${colors.lightCyan})`,
    top: "0",
    bottom: "0",
    left: "50%",
    marginLeft: "-2px",
    zIndex: "0",
  }

  return (
    <div style={containerStyle}>
      <div style={timelineStyle}>
        <div style={lineStyle}></div>
        
        {timelineData.map((item, index) => (
          <TimelineItem
            key={index}
            position={index % 2 === 0 ? "left" : "right"}
            date={item.date}
            title={item.title}
            features={item.features}
            isActive={activeItem === index}
            setActiveItem={setActiveItem}
            index={index}
          />
        ))}
      </div>
    </div>
  )
}

export default RoadmapTimeline
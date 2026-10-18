import * as React from "react"
import { useState, useEffect } from "react"
import colors from "../styles/colors"

const ProgressIndicator = ({ currentVersion, targetVersion, percentage }) => {
  const [animatedPercentage, setAnimatedPercentage] = useState(0)
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedPercentage(percentage)
    }, 300)
    
    return () => clearTimeout(timer)
  }, [percentage])
  
  const containerStyle = {
    backgroundColor: colors.white,
    borderRadius: "8px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
    padding: "2rem",
    marginBottom: "2rem",
    position: "relative",
    overflow: "hidden",
  }
  
  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1.5rem",
  }
  
  const titleStyle = {
    color: colors.darkBlue,
    fontSize: "1.5rem",
    margin: 0,
  }
  
  const versionStyle = {
    fontSize: "1.1rem",
    color: colors.midBlue,
  }
  
  const progressContainerStyle = {
    height: "10px",
    backgroundColor: colors.lightGray,
    borderRadius: "5px",
    position: "relative",
    overflow: "hidden",
    marginBottom: "1rem",
  }
  
  const progressBarStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: `${animatedPercentage}%`,
    background: `linear-gradient(to right, ${colors.blueCyan}, ${colors.cyan})`,
    borderRadius: "5px",
    transition: "width 1.5s cubic-bezier(0.19, 1, 0.22, 1)",
  }
  
  const progressTextStyle = {
    display: "flex",
    justifyContent: "space-between",
  }
  
  const labelStyle = {
    color: colors.blueCyanDimmed,
    fontSize: "0.9rem",
    fontWeight: "bold",
  }
  
  const percentageStyle = {
    color: colors.darkBlue,
    fontSize: "1.2rem",
    fontWeight: "bold",
  }
  
  const glowEffectStyle = {
    position: "absolute",
    top: "-50%",
    left: "-50%",
    width: "200%",
    height: "200%",
    backgroundColor: colors.cyan,
    opacity: "0.05",
    borderRadius: "50%",
    transform: `scale(${animatedPercentage / 100})`,
    transition: "transform 1.5s cubic-bezier(0.19, 1, 0.22, 1)",
  }

  return (
    <div style={containerStyle}>
      <div style={glowEffectStyle}></div>
      <div style={headerStyle}>
        <h2 style={titleStyle}>Development Progress</h2>
        <div style={versionStyle}>
          <span style={{ fontWeight: "bold" }}>{currentVersion}</span>
          {" → "}
          <span>{targetVersion}</span>
        </div>
      </div>
      
      <div style={progressContainerStyle}>
        <div style={progressBarStyle}></div>
      </div>
      
      <div style={progressTextStyle}>
        <div style={labelStyle}>Progress Toward Full Release</div>
        <div style={percentageStyle}>{animatedPercentage}%</div>
      </div>
    </div>
  )
}

export default ProgressIndicator
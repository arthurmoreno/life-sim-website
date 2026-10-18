import * as React from "react"
import Layout from "../components/layout"
import { withPrefix } from "gatsby"

const sectionStyles = {
  marginBottom: "2.5rem",
}

const headingStyles = {
  color: "#333",
  marginBottom: "1.5rem",
}

const downloadCardStyles = {
  background: "#f9f9f9",
  padding: "2rem",
  borderRadius: "8px",
  marginBottom: "2rem",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  display: "flex",
  flexDirection: "column",
}

const buttonStyles = {
  display: "inline-block",
  padding: "1rem 2rem",
  backgroundColor: "#4CAF50",
  color: "white",
  textDecoration: "none",
  borderRadius: "4px",
  fontWeight: "bold",
  marginTop: "1rem",
  cursor: "pointer",
  border: "none",
  transition: "background-color 0.3s ease",
  textAlign: "center",
  fontSize: "1.1rem",
}

const secondaryButtonStyles = {
  ...buttonStyles,
  backgroundColor: "#555",
  padding: "0.8rem 1.5rem",
  fontSize: "1rem",
}

const platformContainerStyles = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
  gap: "2rem",
  marginTop: "2rem",
}

const gameVersionStyles = {
  display: "flex",
  alignItems: "center",
  marginBottom: "1.5rem",
  padding: "1rem",
  borderLeft: "4px solid #4CAF50",
  background: "#f1f1f1",
}

const versionNumberStyles = {
  fontWeight: "bold",
  fontSize: "1.2rem",
  marginRight: "1rem",
}

const badgeStyles = {
  display: "inline-block",
  backgroundColor: "#4CAF50",
  color: "white",
  padding: "0.2rem 0.5rem",
  borderRadius: "4px",
  fontSize: "0.8rem",
  marginLeft: "0.5rem",
}

const gameScreenshotStyles = {
  width: "100%",
  borderRadius: "8px",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  marginBottom: "1rem",
}

const screenshotGalleryStyles = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
  gap: "1rem",
  marginTop: "2rem",
  marginBottom: "2rem",
}

const DownloadPage = () => {
  return (
    <Layout pageTitle="Download">
      <section style={sectionStyles}>
        <h1 style={headingStyles}>Download Life Simulation Game</h1>
        <p>
          Get ready to start your virtual life adventure! Below you'll find all
          available versions of Life Simulation Game for different platforms.
          Choose the one that fits your system and download to begin your journey.
        </p>
      </section>

      <section style={sectionStyles}>
        <h2 style={headingStyles}>Game Screenshots</h2>
        <div style={screenshotGalleryStyles}>
          <img 
            src={withPrefix("/images/gameplay-1.jpg")}
            alt="Character Customization" 
            style={gameScreenshotStyles} 
          />
          <img 
            src={withPrefix("/images/gameplay-2.jpg")}
            alt="Home Building" 
            style={gameScreenshotStyles} 
          />
          <img 
            src={withPrefix("/images/gameplay-3.jpg")}
            alt="Social Interactions" 
            style={gameScreenshotStyles} 
          />
          <img 
            src={withPrefix("/images/gameplay-4.jpg")}
            alt="Career Gameplay" 
            style={gameScreenshotStyles} 
          />
        </div>
      </section>

      <section style={sectionStyles}>
        <h2 style={headingStyles}>Current Release</h2>
        <div style={gameVersionStyles}>
          <span style={versionNumberStyles}>Version 0.8.5</span>
          <span>April 2025</span>
          <span style={{...badgeStyles, marginLeft: "auto"}}>Latest</span>
        </div>
        <p>
          This version includes enhanced character AI behaviors, new personality traits,
          basic home building functionality, core relationship mechanics, and various
          performance optimizations.
        </p>
        
        <div style={platformContainerStyles}>
          {/* Windows Download Card */}
          <div style={downloadCardStyles}>
            <h3>Windows</h3>
            <ul>
              <li>Windows 10/11 (64-bit)</li>
              <li>25 GB available space</li>
              <li>8 GB RAM</li>
              <li>DirectX 11 compatible GPU</li>
            </ul>
            <div style={{marginTop: "auto", display: "flex", flexDirection: "column"}}>
              <a href="#" style={buttonStyles}>Download for Windows</a>
              <small style={{marginTop: "0.5rem", color: "#666"}}>6.2 GB</small>
            </div>
          </div>
          
          {/* Mac Download Card */}
          <div style={downloadCardStyles}>
            <h3>macOS</h3>
            <ul>
              <li>macOS 11 or later</li>
              <li>25 GB available space</li>
              <li>8 GB RAM</li>
              <li>Metal-compatible GPU</li>
            </ul>
            <div style={{marginTop: "auto", display: "flex", flexDirection: "column"}}>
              <a href="#" style={buttonStyles}>Download for macOS</a>
              <small style={{marginTop: "0.5rem", color: "#666"}}>6.5 GB</small>
            </div>
          </div>
          
          {/* Linux Download Card */}
          <div style={downloadCardStyles}>
            <h3>Linux</h3>
            <ul>
              <li>Ubuntu 20.04 LTS or equivalent</li>
              <li>25 GB available space</li>
              <li>8 GB RAM</li>
              <li>Vulkan-compatible GPU</li>
            </ul>
            <div style={{marginTop: "auto", display: "flex", flexDirection: "column"}}>
              <a href="#" style={buttonStyles}>Download for Linux</a>
              <small style={{marginTop: "0.5rem", color: "#666"}}>6.1 GB</small>
            </div>
          </div>
        </div>
      </section>
      
      <section style={sectionStyles}>
        <h2 style={headingStyles}>Installation Instructions</h2>
        <div style={{background: "#f9f9f9", padding: "2rem", borderRadius: "8px"}}>
          <h3>Windows</h3>
          <ol>
            <li>Download the installer using the button above</li>
            <li>Run the downloaded .exe file</li>
            <li>Follow the installation wizard instructions</li>
            <li>Launch the game from the desktop shortcut or start menu</li>
          </ol>
          
          <h3>macOS</h3>
          <ol>
            <li>Download the .dmg file using the button above</li>
            <li>Open the .dmg file</li>
            <li>Drag the Life Simulation Game icon to your Applications folder</li>
            <li>Launch the game from your Applications folder or Launchpad</li>
          </ol>
          
          <h3>Linux</h3>
          <ol>
            <li>Download the .AppImage file using the button above</li>
            <li>Make the downloaded file executable (right-click → Properties → Permissions → Allow execution, or use <code>chmod +x</code> in terminal)</li>
            <li>Double-click the AppImage file to run</li>
          </ol>
        </div>
      </section>
      
      <section style={sectionStyles}>
        <h2 style={headingStyles}>Previous Versions</h2>
        <p>
          Need access to an older version? You can find our previous releases below.
        </p>
        
        <div style={gameVersionStyles}>
          <span style={versionNumberStyles}>Version 0.8.0</span>
          <span>February 2025</span>
        </div>
        <p>
          Initial release with basic life simulation gameplay, character creator, and simple build mode.
        </p>
        <div style={{marginTop: "1rem"}}>
          <a href="#" style={secondaryButtonStyles}>Windows</a>
          <a href="#" style={{...secondaryButtonStyles, marginLeft: "1rem"}}>macOS</a>
          <a href="#" style={{...secondaryButtonStyles, marginLeft: "1rem"}}>Linux</a>
        </div>
      </section>
      
      <section style={sectionStyles}>
        <h2 style={headingStyles}>Early Access Program</h2>
        <div style={{
          background: "#f0f7f0", 
          padding: "2rem", 
          borderRadius: "8px",
          borderLeft: "4px solid #4CAF50",
        }}>
          <h3>Join Our Early Access Community</h3>
          <p>
            Get early access to upcoming features and help shape the future of Life Simulation Game!
            As an early access member, you'll receive:
          </p>
          <ul>
            <li>Weekly development builds with new experimental features</li>
            <li>Direct communication channel with our development team</li>
            <li>Exclusive in-game items and customization options</li>
            <li>Your name in the game credits as an early supporter</li>
          </ul>
          <a href="#" style={{
            ...buttonStyles, 
            backgroundColor: "#2e7d32",
            marginTop: "1.5rem",
          }}>
            Join Early Access Program
          </a>
        </div>
      </section>
    </Layout>
  )
}

export default DownloadPage
import * as React from "react"
import Layout from "../components/layout"
import { withPrefix } from "gatsby"

// Styles for the home page
const sectionStyles = {
  marginBottom: "2rem",
}

const headingStyles = {
  color: "#333",
  marginBottom: "1.5rem",
}

const featuresContainerStyles = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
  gap: "2rem",
  marginTop: "2rem",
}

const featureCardStyles = {
  background: "#f9f9f9",
  padding: "1.5rem",
  borderRadius: "8px",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
}

const featureIconStyles = {
  fontSize: "2rem",
  marginBottom: "1rem",
  color: "#555",
}

const buttonStyles = {
  display: "inline-block",
  padding: "0.8rem 1.5rem",
  backgroundColor: "#4CAF50",
  color: "white",
  textDecoration: "none",
  borderRadius: "4px",
  fontWeight: "bold",
  marginTop: "1rem",
  cursor: "pointer",
  border: "none",
  transition: "background-color 0.3s ease",
}

const gameScreenshotStyles = {
  maxWidth: "100%",
  height: "auto",
  borderRadius: "8px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
  marginTop: "1rem",
}

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <section style={sectionStyles}>
        <h1 style={headingStyles}>Welcome to Life Simulation Game</h1>
        <p>
          Life Simulation Game is an early prototype that explores artificial life evolution using NEAT (NeuroEvolution of Augmenting Topologies). The engine mixes Python and C++ components to keep development flexible while maintaining performance.
        </p>
        <p>
          Our goal is to experiment with simple ecosystems and evolving agents. The project is currently closed‑source, but we're excited to grow with feedback from early testers.
        </p>
        <div style={{ marginTop: "2rem" }}>
          {/* Game screenshot */}
          <img 
            src={withPrefix("/images/game-screenshot.png")}
            alt="Life Simulation Game Screenshot" 
            style={gameScreenshotStyles}
          />
        </div>
        <div style={{ marginTop: "1.5rem" }}>
          <a href="/download" style={buttonStyles}>
            Download Now
          </a>
        </div>
      </section>

      <section style={sectionStyles}>
        <h2 style={headingStyles}>Current Simulation Features</h2>
        <div style={featuresContainerStyles}>
          <div style={featureCardStyles}>
            <div style={featureIconStyles}>💧</div>
            <h3>Water Cycle Simulation</h3>
            <p>
              Experience a realistic water cycle within the simulation environment.
            </p>
          </div>
          <div style={featureCardStyles}>
            <div style={featureIconStyles}>🌱</div>
            <h3>Plant Photosynthesis</h3>
            <p>
              Plants in the simulation perform basic photosynthesis processes.
            </p>
          </div>
          <div style={featureCardStyles}>
            <div style={featureIconStyles}>🧠</div>
            <h3>AI Evolution</h3>
            <p>
              AI entities can evolve using the neat-python genome as a standard API of evolution.
            </p>
          </div>
          <div style={featureCardStyles}>
            <div style={featureIconStyles}>🔧</div>
            <h3>Custom Game Engine</h3>
            <p>
              Built with a custom engine combining Python for high-level logic and C++ for performance-critical components.
            </p>
          </div>
        </div>
      </section>

      <section style={sectionStyles}>
        <h2 style={headingStyles}>Future Goals</h2>
        <ul>
          <li>Home building tools</li>
          <li>Character personality traits</li>
        </ul>
      </section>

      <section style={sectionStyles}>
        <h2 style={headingStyles}>Latest Updates</h2>
        <div>
          <article>
            <h3>Game Engine Development</h3>
            <p>
              We've made significant progress on our custom engine in Python and C++. Check out the Documentation page for building instructions.
            </p>
            <small>April 2025</small>
          </article>
          <hr style={{ margin: "1.5rem 0", border: "none", borderTop: "1px solid #eee" }} />
          <article>
            <h3>AI Evolution Framework Implementation</h3>
            <p>
              Our AI Evolution framework is in active development, allowing for sophisticated evolutionary algorithms.
            </p>
            <small>March 2025</small>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage

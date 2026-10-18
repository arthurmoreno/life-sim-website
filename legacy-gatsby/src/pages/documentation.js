import * as React from "react"
import Layout from "../components/layout"

const sectionStyles = {
  marginBottom: "2.5rem",
}

const headingStyles = {
  color: "#333",
  marginBottom: "1.5rem",
}

const docSectionStyles = {
  background: "#f9f9f9",
  padding: "2rem",
  borderRadius: "8px",
  marginBottom: "2rem",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
}

const tableOfContentsStyles = {
  background: "#f1f1f1",
  padding: "1.5rem",
  borderRadius: "8px",
  marginBottom: "2rem",
}

const linkStyles = {
  color: "#4CAF50",
  textDecoration: "none",
  fontWeight: "500",
  transition: "color 0.3s ease",
}

const codeBlockStyles = {
  background: "#f1f1f1",
  padding: "1rem",
  borderRadius: "4px",
  fontFamily: "monospace",
  overflow: "auto",
  marginBottom: "1rem",
}

const gameScreenshotStyles = {
  maxWidth: "100%",
  height: "auto",
  borderRadius: "8px",
  border: "1px solid #ddd",
  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  marginBottom: "1rem",
}

const DocumentationPage = () => {
  return (
    <Layout pageTitle="Documentation">
      <section style={sectionStyles}>
        <h1 style={headingStyles}>Life Simulation Game Documentation</h1>
        <p>
          Welcome to the comprehensive documentation for Life Simulation Game. This page provides
          technical information, building instructions, and developer references for the game engine and simulation.
        </p>
      </section>

      <section style={tableOfContentsStyles}>
        <h2>Table of Contents</h2>
        <ul>
          <li><a href="#game-engine" style={linkStyles}>Game Engine</a></li>
          <li><a href="#lifesimcore" style={linkStyles}>Lifesimcore</a></li>
          <li><a href="#running" style={linkStyles}>Running the Game</a></li>
          <li><a href="#documentation-generation" style={linkStyles}>Documentation Generation</a></li>
          <li><a href="#simulation" style={linkStyles}>Simulation Details</a></li>
          <li><a href="#similar-projects" style={linkStyles}>Similar Projects</a></li>
        </ul>
      </section>

      <section id="game-engine" style={docSectionStyles}>
        <h2 style={headingStyles}>Game Engine</h2>
        <p>
          Life Simulation Game uses a custom engine developed in Python and C++. The engine is designed
          to handle the complex simulation of artificial life forms and their environment.
        </p>
        <div style={codeBlockStyles}>
          <pre>
{`# Basic engine commands
make build-test
make install-package`}
          </pre>
        </div>
        
        <h3>Technical Overview</h3>
        <p>
          Our custom engine combines:
        </p>
        <ul>
          <li>Python for high-level logic and AI behavior definition</li>
          <li>C++ for performance-critical components and core simulation</li>
          <li>PyTorch integration for neural network functionalities</li>
          <li>EnTT for efficient entity management</li>
          <li>SDL2 for rendering and display</li>
        </ul>
      </section>

      <section id="lifesimcore" style={docSectionStyles}>
        <h2 style={headingStyles}>Lifesimcore</h2>
        
        <h3>Libraries and Dependencies Installation</h3>
        <p>
          Before building the core simulation engine, you'll need to install the required dependencies:
        </p>
        <div style={codeBlockStyles}>
          <pre>
{`sudo apt-get install liblmdb++-dev`}
          </pre>
        </div>
        
        <h3>Building Instructions</h3>
        <p>
          Follow these steps to build the lifesimcore engine:
        </p>
        <div style={codeBlockStyles}>
          <pre>
{`cd lifesimcore
conda activate life-sim-312
make build-test
make generate-stubs
make install-package
make conda-install`}
          </pre>
        </div>
        
        <p>
          These commands will:
        </p>
        <ol>
          <li>Build and test the core simulation components</li>
          <li>Generate Python stubs for the C++ components</li>
          <li>Install the package in your Python environment</li>
          <li>Set up the Conda environment with all dependencies</li>
        </ol>
      </section>

      <section id="running" style={docSectionStyles}>
        <h2 style={headingStyles}>Running the Game</h2>
        <p>
          To run the game, you need to have the lifesimcore library properly installed in your virtual environment.
          Make sure you've completed all the building steps in the previous section.
        </p>
        
        <h3>Launch Commands</h3>
        <p>
          Once your environment is set up, you can run the game with:
        </p>
        <div style={codeBlockStyles}>
          <pre>
{`# Activate the environment if not already active
conda activate life-sim-312

# Run the main simulation
python -m lifesim.main`}
          </pre>
        </div>
      </section>

      <section id="documentation-generation" style={docSectionStyles}>
        <h2 style={headingStyles}>Documentation Generation</h2>
        
        <h3>Generate Doxygen Documentation</h3>
        <p>
          To generate documentation for the C++ components, follow these steps:
        </p>
        <div style={codeBlockStyles}>
          <pre>
{`# Install dependencies
sudo apt-get install doxygen

# Generate docs and XML for Sphinx
cd lifesimcore
doxygen Doxyfile`}
          </pre>
        </div>
        
        <h3>Generate Sphinx Documentation</h3>
        <p>
          For Python components and comprehensive documentation:
        </p>
        <div style={codeBlockStyles}>
          <pre>
{`make clean
sphinx-apidoc -f -o . ../lifesim
sphinx-build -b html . _build/html`}
          </pre>
        </div>
        <p>
          After running these commands, you'll find the generated documentation in the _build/html directory.
        </p>
      </section>

      <section id="simulation" style={docSectionStyles}>
        <h2 style={headingStyles}>Simulation Details</h2>
        
        <h3>Current Features</h3>
        <p>
          The Life Simulation Game currently simulates:
        </p>
        <ul>
          <li><strong>Water Cycle:</strong> A complete simulation of evaporation, condensation, precipitation</li>
          <li><strong>Plant Photosynthesis:</strong> Basic photosynthesis processes for plant entities</li>
          <li><strong>AI Evolution:</strong> Using NEAT (NeuroEvolution of Augmenting Topologies) algorithms</li>
        </ul>
        
        <h3>NEAT Implementation</h3>
        <p>
          Our implementation uses the neat-python genome as a standard API for evolution. This allows artificial
          life forms to adapt and evolve in response to environmental pressures and resource availability.
        </p>
      </section>

      <section id="similar-projects" style={docSectionStyles}>
        <h2 style={headingStyles}>Similar Projects</h2>
        <p>
          If you're interested in artificial life simulations, you may want to check out these related projects:
        </p>
        <ul>
          <li><a href="https://github.com/WindyLab/Gym-PPS" target="_blank" rel="noopener noreferrer" style={linkStyles}>Gym-PPS</a> - A physics-based environment for AI research</li>
          <li><a href="https://github.com/chrxh/alien" target="_blank" rel="noopener noreferrer" style={linkStyles}>Alien</a> - An artificial life simulation focusing on cellular automata</li>
          <li><a href="https://github.com/danijar/crafter" target="_blank" rel="noopener noreferrer" style={linkStyles}>Crafter</a> - A procedurally generated environment for AI research</li>
        </ul>
      </section>
    </Layout>
  )
}

export default DocumentationPage
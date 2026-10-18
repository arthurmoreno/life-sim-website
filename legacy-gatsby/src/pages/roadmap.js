import * as React from "react"
import { useState, useEffect } from "react"
import Layout from "../components/layout"
import { withPrefix } from "gatsby"
import RoadmapTimeline from "../components/roadmap-timeline"
import FeatureCards from "../components/feature-cards"
import ProgressIndicator from "../components/progress-indicator"
import ImageCarousel from "../components/image-carousel"
import colors from "../styles/colors"

// Styles
const pageStyles = {
  color: colors.darkBlue,
}

const sectionStyles = {
  marginBottom: "3.5rem",
  position: "relative",
}

const headingStyles = {
  color: colors.darkBlue,
  marginBottom: "1.5rem",
  fontSize: "2.2rem",
}

const subHeadingStyles = {
  color: colors.midBlue,
  marginBottom: "1.2rem",
  fontSize: "1.8rem",
}

const paragraphStyles = {
  color: colors.midBlue,
  lineHeight: "1.7",
  fontSize: "1.1rem",
}

const buttonStyles = {
  display: "inline-block",
  padding: "0.9rem 1.8rem",
  backgroundColor: colors.blueCyan,
  color: colors.white,
  textDecoration: "none",
  borderRadius: "4px",
  fontWeight: "bold",
  marginTop: "1.2rem",
  border: "none",
  cursor: "pointer",
  transition: "all 0.3s ease",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  "&:hover": {
    backgroundColor: colors.cyan,
    transform: "translateY(-2px)",
    boxShadow: "0 6px 14px rgba(0, 0, 0, 0.15)",
  },
}

// Data for timeline component
const timelineData = [
  {
    title: "Alpha 0.8.5 (Current Version)",
    date: "April 2025",
    features: [
      "Enhanced character AI behaviors",
      "New personality traits system",
      "Basic home building functionality",
      "Core relationship mechanics",
      "Performance optimizations",
    ],
  },
  {
    title: "Beta 0.9.0",
    date: "July 2025 (Planned)",
    features: [
      "Advanced building tools and objects",
      "Career progression paths (5 career tracks)",
      "Dynamic weather system",
      "First iteration of genetics system",
      "Community events and gatherings",
    ],
  },
  {
    title: "Beta 0.9.5",
    date: "October 2025 (Planned)",
    features: [
      "Pet companions with AI behaviors",
      "Advanced social interactions",
      "New world locations and neighborhoods",
      "Life events system (celebrations, milestones)",
      "Extended character skills",
    ],
  },
  {
    title: "Full Release 1.0",
    date: "January 2026 (Planned)",
    features: [
      "Complete life stages from birth to elderly",
      "Full career paths with special events",
      "Community sharing features",
      "Town customization tools",
      "Advanced genetics and family trees",
      "Expanded building catalog",
      "Storyline scenarios and challenges",
    ],
  },
  {
    title: "Post-Release Updates",
    date: "2026 and beyond",
    features: [
      "Seasonal content and holiday celebrations",
      "New neighborhoods and world expansion",
      "Mod support for community content",
      "Mobile companion app",
      "Multiplayer features",
    ],
  },
];

// Data for feature cards
const featureData = [
  {
    title: "Character System",
    description: "Create detailed characters with unique personalities, traits, and appearances through our advanced character creation system.",
    icon: "👤",
    completed: true,
  },
  {
    title: "Building & Construction",
    description: "Design and build detailed houses and community buildings with our intuitive building tools.",
    icon: "🏠",
    completed: true,
  },
  {
    title: "Social Interactions",
    description: "Develop relationships with other characters through a rich system of social interactions and relationship dynamics.",
    icon: "👥",
    completed: false,
  },
  {
    title: "Life Stages",
    description: "Experience the full cycle of life with age-appropriate activities and events for each life stage.",
    icon: "👶👴",
    completed: false,
  },
];

// Data for image carousel
const carouselImages = [
  {
    src: "/images/game-screenshot.png",
    title: "Advanced Building Tools",
    description: "Create detailed houses with our intuitive building system",
  },
  {
    src: "/images/game-screenshot.png", // Ideally you would have multiple different images
    title: "Character Creation",
    description: "Design unique characters with hundreds of customization options",
  },
  {
    src: "/images/game-screenshot.png", // Ideally you would have multiple different images
    title: "Dynamic Weather System",
    description: "Experience changing seasons and weather patterns that affect gameplay",
  },
];

// GitHub Project Items
const githubProjectItems = [
  { id: 45, title: "[Epic] Design and Implement AI Evolution framework", url: "https://github.com/arthurmoreno/life-simulation/issues/45", status: "In Progress" },
  { id: 52, title: "[Epic] Engine Core V3", url: "https://github.com/arthurmoreno/life-simulation/issues/52", status: "Backlog" },
  { id: 27, title: "[Epic] Environment V2", url: "https://github.com/arthurmoreno/life-simulation/issues/27", status: "Backlog" },
  { id: 22, title: "[Epic] Combat V1", url: "https://github.com/arthurmoreno/life-simulation/issues/22", status: "Backlog" },
  { id: 23, title: "[Epic] Building V1", url: "https://github.com/arthurmoreno/life-simulation/issues/23", status: "Backlog" },
  { id: 28, title: "[Epic] Map Procedural Generation V3", url: "https://github.com/arthurmoreno/life-simulation/issues/28", status: "Backlog" },
  { id: 29, title: "[Epic] Optimizations", url: "https://github.com/arthurmoreno/life-simulation/issues/29", status: "Backlog" },
  { id: 32, title: "[Epic] Metabolism V1", url: "https://github.com/arthurmoreno/life-simulation/issues/32", status: "Backlog" },
  { id: 47, title: "[Epic] Client-Server V2", url: "https://github.com/arthurmoreno/life-simulation/issues/47", status: "Backlog" },
  { id: 46, title: "[Epic] Graphics and SDL integration", url: "https://github.com/arthurmoreno/life-simulation/issues/46", status: "Backlog" },
  { id: 49, title: "[Epic][Infinite] Project management", url: "https://github.com/arthurmoreno/life-simulation/issues/49", status: "Todo" },
  { id: 24, title: "Migrate to SDL3", url: "https://github.com/arthurmoreno/life-simulation/issues/24", status: "Backlog" },
  { id: 57, title: "[Epic] Docs V1", url: "https://github.com/arthurmoreno/life-simulation/issues/57", status: "Backlog" },
  { id: 61, title: "Finish the docs code before starting the documentation of this Epic", url: "https://github.com/arthurmoreno/life-simulation/issues/61", status: "Done" },
  { id: 66, title: "[Project Item][Epic] Developer Experience", url: "https://github.com/arthurmoreno/life-simulation/issues/66", status: "Backlog" },
  { id: 68, title: "[Project Item][Epic] Game Engine", url: "https://github.com/arthurmoreno/life-simulation/issues/68", status: "Backlog" },
];

const projectTableStyles = {
  width: "100%",
  borderCollapse: "collapse",
  marginTop: "2rem",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  borderRadius: "8px",
  overflow: "hidden",
};

const tableCellStyles = {
  padding: "1rem",
  borderBottom: "1px solid #eaeaea",
};

const tableHeaderStyles = {
  ...tableCellStyles,
  backgroundColor: colors.blueCyan,
  color: colors.white,
  fontWeight: "bold",
  textAlign: "left",
};

const statusBadgeStyles = (status) => {
  const baseStyles = {
    display: "inline-block",
    padding: "0.25rem 0.75rem",
    borderRadius: "20px",
    fontWeight: "500",
    fontSize: "0.85rem",
  };
  
  switch(status.toLowerCase()) {
    case "in progress":
      return {
        ...baseStyles,
        backgroundColor: "#FEF9C3",
        color: "#854D0E",
      };
    case "done":
      return {
        ...baseStyles,
        backgroundColor: "#DCFCE7",
        color: "#166534",
      };
    case "todo":
      return {
        ...baseStyles,
        backgroundColor: "#E0F2FE",
        color: "#075985",
      };
    case "backlog":
    default:
      return {
        ...baseStyles,
        backgroundColor: "#F3F4F6",
        color: "#4B5563",
      };
  }
};

const RoadmapPage = () => {
  const [showAllFeatures, setShowAllFeatures] = useState(false);
  const [showCompleteRoadmap, setShowCompleteRoadmap] = useState(false);
  
  // Additional features that are shown when "Show More" is clicked
  const additionalFeatures = [
    {
      title: "Career Progression",
      description: "Pursue various career paths with unique advancement opportunities, workplace events, and rewards.",
      icon: "💼",
      completed: false,
    },
    {
      title: "Dynamic Weather",
      description: "Experience changing weather patterns that affect character moods and available activities.",
      icon: "🌦️",
      completed: false,
    },
  ];

  return (
    <Layout pageTitle="Road Map">
      <div style={pageStyles}>
        <section style={sectionStyles}>
          <h1 style={headingStyles}>Development Road Map</h1>
          <p style={paragraphStyles}>
            Follow our journey as we develop the Life Simulation Game. Here's our 
            planned roadmap with features, improvements, and estimated release dates.
          </p>
          
          {/* Progress Indicator */}
          <ProgressIndicator 
            currentVersion="Alpha 0.8.5" 
            targetVersion="Release 1.0" 
            percentage={65} 
          />
          
          {/* Image Carousel */}
          <h2 style={subHeadingStyles}>Feature Previews</h2>
          <ImageCarousel images={carouselImages} />
        </section>
        
        {/* GitHub Project Items */}
        <section style={sectionStyles}>
          <h2 style={subHeadingStyles}>Project Development Roadmap</h2>
          <p style={paragraphStyles}>
            Below is our GitHub project roadmap showing the current epics and major development items.
            Track our progress and see what features are coming next.
          </p>
          
          <div>
            <table style={projectTableStyles}>
              <thead>
                <tr>
                  <th style={tableHeaderStyles}>Title</th>
                  <th style={tableHeaderStyles}>Status</th>
                  <th style={tableHeaderStyles}>Details</th>
                </tr>
              </thead>
              <tbody>
                {githubProjectItems
                  .filter(item => !showCompleteRoadmap ? 
                    (item.status === "In Progress" || item.status === "Todo" || githubProjectItems.indexOf(item) < 6) : true)
                  .map((item) => (
                    <tr key={item.id}>
                      <td style={tableCellStyles}>{item.title}</td>
                      <td style={tableCellStyles}>
                        <span style={statusBadgeStyles(item.status)}>{item.status}</span>
                      </td>
                      <td style={tableCellStyles}>
                        <a 
                          href={item.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          style={{color: colors.blueCyan, textDecoration: "none"}}
                        >
                          View on GitHub
                        </a>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            
            {!showCompleteRoadmap && (
              <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
                <button 
                  style={buttonStyles}
                  onClick={() => setShowCompleteRoadmap(true)}
                >
                  View Complete Roadmap
                </button>
              </div>
            )}
          </div>
        </section>
        
        {/* Feature Cards */}
        <section style={sectionStyles}>
          <h2 style={subHeadingStyles}>Major Features</h2>
          <FeatureCards features={featureData} />
          
          {/* Conditionally render additional features */}
          {showAllFeatures && (
            <FeatureCards features={additionalFeatures} />
          )}
          
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <button 
              style={buttonStyles}
              onClick={() => setShowAllFeatures(!showAllFeatures)}
            >
              {showAllFeatures ? "Show Less" : "Show More Features"}
            </button>
          </div>
        </section>
        
        {/* Timeline Section */}
        <section style={sectionStyles}>
          <h2 style={subHeadingStyles}>Development Timeline</h2>
          <RoadmapTimeline timelineData={timelineData} />
        </section>

        <section style={{...sectionStyles, marginTop: "4rem"}}>
          <h2 style={subHeadingStyles}>Community Feedback</h2>
          <p style={paragraphStyles}>
            Your feedback shapes our development! Join our community discussion forums 
            to suggest features and report bugs. Our team actively incorporates player 
            feedback to improve the game.
          </p>
          <div style={{ marginTop: "1.5rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a 
              href="https://community.lifesimulationgame.com" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                ...buttonStyles,
                backgroundColor: colors.midBlue,
              }}
            >
              Join Community Discussion
            </a>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSf..." 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                ...buttonStyles,
                backgroundColor: "transparent",
                border: `2px solid ${colors.blueCyan}`,
                color: colors.blueCyan,
              }}
            >
              Submit Feature Request
            </a>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default RoadmapPage
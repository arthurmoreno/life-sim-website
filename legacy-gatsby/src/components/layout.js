import * as React from "react"
import { Link } from "gatsby"
import colors from "../styles/colors"

// Styles for the layout
const layoutStyles = {
  margin: "0 auto",
  maxWidth: 1200,
  padding: `0 1.0875rem 1.45rem`,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const headerStyles = {
  background: `linear-gradient(to right, ${colors.darkBlue}, ${colors.midBlue})`,
  marginBottom: "1.45rem",
  padding: "1rem 0",
  color: "white",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
  width: "100vw",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
}

const headerContentStyles = {
  margin: "0 auto",
  maxWidth: 1200,
  padding: "0.5rem 1.0875rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}

const logoStyles = {
  margin: 0,
  fontSize: "1.8rem",
}

const logoLinkStyles = {
  color: colors.white,
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
}

const navStyles = {
  display: "flex",
  listStyle: "none",
  margin: 0,
  padding: 0,
}

const navItemStyles = {
  margin: "0 0.5rem",
}

// Updated nav link style to button-like appearance
const navLinkStyles = {
  color: colors.white,
  textDecoration: "none",
  fontSize: "1.1rem",
  fontWeight: "500",
  padding: "0.6rem 1rem",
  borderRadius: "4px",
  transition: "all 0.2s ease",
  display: "block",
  position: "relative",
}

// Active style for the nav buttons
const activeStyles = {
  backgroundColor: colors.blueCyanDimmed,
  color: colors.lightCyan,
}

// Hover effect will be handled in CSS

const footerStyles = {
  marginTop: "4rem",
  padding: "2.5rem 0 1.5rem",
  background: `linear-gradient(to right, ${colors.darkBlue}, ${colors.midBlue})`,
  color: colors.white,
  textAlign: "center",
  position: "relative",
  overflow: "hidden",
  width: "100vw",
  left: "50%",
  right: "50%",
  marginLeft: "-50vw",
  marginRight: "-50vw",
}

const footerWaveStyles = {
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "75px",
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z' fill='%23ffffff' fill-opacity='0.1'%3E%3C/path%3E%3C/svg%3E")`,
  backgroundSize: "cover",
  backgroundPosition: "center",
}

const Layout = ({ children, pageTitle }) => {
  return (
    <div className="site-wrapper">
      <header style={headerStyles}>
        <div style={headerContentStyles}>
          <h1 style={logoStyles}>
            <Link to="/" style={logoLinkStyles}>
              Life Simulation Game
            </Link>
          </h1>
          <nav>
            <ul style={navStyles}>
              <li style={navItemStyles}>
                <Link to="/" style={navLinkStyles} activeStyle={activeStyles} className="nav-link">
                  Home
                </Link>
              </li>
              <li style={navItemStyles}>
                <Link to="/roadmap" style={navLinkStyles} activeStyle={activeStyles} className="nav-link">
                  Road Map
                </Link>
              </li>
              <li style={navItemStyles}>
                <Link to="/documentation" style={navLinkStyles} activeStyle={activeStyles} className="nav-link">
                  Documentation
                </Link>
              </li>
              <li style={navItemStyles}>
                <Link to="/download" style={navLinkStyles} activeStyle={activeStyles} className="nav-link">
                  Download
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div style={{ ...layoutStyles, marginTop: "calc(3rem + 45px)" }}>
        <main>
          <title>{pageTitle} | Life Simulation Game</title>
          {children}
        </main>
      </div>
      <footer style={footerStyles}>
        <div style={footerWaveStyles}></div>
        <div style={{ padding: "1rem", position: "relative", zIndex: "1" }}>
          <p>© {new Date().getFullYear()} Life Simulation Game. All rights reserved.</p>
          <div style={{ marginTop: "1rem", display: "flex", justifyContent: "center", gap: "1.5rem" }}>
            <a href="https://twitter.com/lifesimgame" style={{ color: colors.lightCyan }}>Twitter</a>
            <a href="https://discord.gg/lifesimgame" style={{ color: colors.lightCyan }}>Discord</a>
            <a href="https://github.com/lifesimgame" style={{ color: colors.lightCyan }}>GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
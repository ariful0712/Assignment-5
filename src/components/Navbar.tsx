import "./Navbar.css"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Brand */}
        <a href="#" className="brand">
          <span className="brand-logo">DS</span>
          <span className="brand-name">Dev Stack</span>
        </a>

        {/* Navigation Links */}
        <div className="nav-links">
          <a href="#" className="active">Home</a>
          <a href="#technologies">Technologies</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Authentication Buttons */}
        <div className="auth-buttons">
          <button className="sign-in">Sign In</button>
          <button className="sign-up">Sign Up</button>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
import "./Footer.css"
function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand */}

        <div className="footer-brand">
          <div className="footer-logo">
            DS
          </div>
          <h2>Dev Stack</h2>
          <p>
            Build your ideal development stack by exploring
            modern technologies for your next project.
          </p>

          <div className="social-links">
            <a href="#">GitHub</a>
            <a href="#">LinkedIn</a>
            <a href="#">Twitter</a>
          </div>

        </div>
        <div className="footer-column">

          <h3>Product</h3>
          <a href="#technologies">Technologies</a>
          <a href="#projects">Projects</a>
          <a href="#">Features</a>
          <a href="#">Pricing</a>

        </div>

        <div className="footer-column">
          <h3>Company</h3>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#">Careers</a>
          <a href="#">Blog</a>

        </div>
        <div className="footer-column">
          <h3>Legal</h3>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
      {/* Bottom */}

      <div className="footer-bottom">
        <p>
          © 2026 Dev Stack. All rights reserved.
        </p>
        <div>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
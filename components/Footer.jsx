// components/Footer.jsx

const Footer = () => {
    return (
      <>
        <hr/>
        <div className="footer-container">
          <p>
            © {new Date().getFullYear()} Cas's Portfolio
          </p>
          <div className="social_icons">
            <a
              href="mailto:casbeems@live.nl"
              aria-label="Outlook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-envelope"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/casbeems/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </>
    )
  }
  
  export default Footer;
function Footer() {
  const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

  return (
    <footer className="main-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            <img src={asset("images/freelancehub-logo1.png")} alt="FreelanceHub" />
          </a>

          <p>
            Connect with talented freelancers,
            discover great projects, and build
            something amazing together.
          </p>

          <div className="social-links">
            <a href="#">LinkedIn</a>
            <a href="#">GitHub</a>
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
          </div>
        </div>

        <div className="footer-column">
          <h3>For Clients</h3>
          <a href="#jobs">Find Freelancers</a>
          <a href="#post-job">Post a Job</a>
          <a href="#projects">Manage Projects</a>
          <a href="#pricing">Pricing</a>
        </div>

        <div className="footer-column">
          <h3>For Freelancers</h3>
          <a href="#jobs">Find Jobs</a>
          <a href="#profile">Create Profile</a>
          <a href="#applications">My Applications</a>
          <a href="#resources">Resources</a>
        </div>

        <div className="footer-column">
          <h3>Company</h3>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
          <a href="#help">Help Center</a>
          <a href="#privacy">Privacy Policy</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 FreelanceHub. All rights reserved.</p>
        <div>
          <a href="#terms">Terms</a>
          <a href="#privacy">Privacy</a>
          <a href="#cookies">Cookies</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

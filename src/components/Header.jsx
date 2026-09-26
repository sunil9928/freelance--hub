function Header() {
  return (
    <header className="site-header">
      <a href="/" className="logo">
        <img src="/images/freelancehub-logo.png" alt="FreelanceHub" />
      </a>

      <nav className="main-nav">
        <a href="#home">Home</a>
        <a href="#jobs">Find Jobs</a>
        <a href="#freelancers">Find Freelancers</a>
        <a href="#how-it-works">How It Works</a>
      </nav>

      <div className="header-actions">
        <button className="login-btn">Login</button>
        <button className="join-btn">Join Now</button>
      </div>
    </header>
  );
}

export default Header;

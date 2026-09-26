function Header() {
  const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

  return (
    <header className="site-header">
      <a href="#home" className="logo">
        <img src={asset("images/freelancehub-logo.png")} alt="FreelanceHub" />
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

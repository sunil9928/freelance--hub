import FeatureCard from "../components/FeatureCard";

function Home() {
  return (
    <main id="home">
      <section className="hero-section">
        <div className="hero-content">
          <span className="hero-badge">✦ The future of freelance work</span>

          <h1>
            Find exceptional
            <span> talent </span>
            for your next project.
          </h1>

          <p>
            Connect with skilled freelancers, discover exciting projects, and build something extraordinary
            together.
          </p>

          <div className="hero-buttons">
            <a href="#freelancers" className="primary-btn">
              Find Freelancers →
            </a>
            <a href="#jobs" className="secondary-btn">
              Explore Jobs
            </a>
          </div>

          <div className="search-box">
            <input type="text" placeholder="Search for skills, jobs or services..." />
            <button>Search</button>
          </div>
        </div>
      </section>

      {/* quick numbers to build trust */}
      <section className="stats-section">
        <div className="stat">
          <h2>10K+</h2>
          <p>Freelancers</p>
        </div>
        <div className="stat">
          <h2>5K+</h2>
          <p>Projects</p>
        </div>
        <div className="stat">
          <h2>120+</h2>
          <p>Skills</p>
        </div>
        <div className="stat">
          <h2>98%</h2>
          <p>Success Rate</p>
        </div>
      </section>

      <section className="features-section" id="freelancers">
        <div className="section-heading">
          <span>WHY FREELANCEHUB</span>
          <h2>
            Everything you need to
            <br />
            work smarter.
          </h2>
        </div>

        <div className="feature-grid">
          <FeatureCard
            image="/images/find-talent.png"
            title="Find Talent"
            description="Discover skilled freelancers based on skills, budget and experience."
            link="#freelancers"
          />
          <FeatureCard
            image="/images/find-project.png"
            title="Find Projects"
            description="Explore exciting projects and find opportunities that match your skills."
            link="#jobs"
          />
          <FeatureCard
            image="/images/grow-career.png"
            title="Grow Your Career"
            description="Build your profile, work with clients and grow your freelance career."
            link="#how-it-works"
          />
        </div>
      </section>

      {/* a small preview of open jobs, full list lives on the Jobs page */}
      <section className="jobs-section" id="jobs">
        <div className="section-heading left">
          <span>POPULAR OPPORTUNITIES</span>
          <h2>
            Projects waiting
            <br />
            for you.
          </h2>
        </div>

        <div className="job-grid">
          <div className="job-card">
            <div>
              <span className="job-tag">Website</span>
              <h3>Build a Modern Business Website</h3>
              <p>React • JavaScript • CSS</p>
            </div>
            <strong>₹25K - ₹40K</strong>
          </div>

          <div className="job-card">
            <div>
              <span className="job-tag">Design</span>
              <h3>UI/UX Design for Mobile App</h3>
              <p>Figma • UI Design • UX</p>
            </div>
            <strong>₹15K - ₹30K</strong>
          </div>

          <div className="job-card">
            <div>
              <span className="job-tag">Data</span>
              <h3>Business Dashboard Development</h3>
              <p>Python • Power BI • SQL</p>
            </div>
            <strong>₹30K - ₹50K</strong>
          </div>
        </div>
      </section>

      <section className="how-section" id="how-it-works">
        <div className="section-heading">
          <span>HOW IT WORKS</span>
          <h2>
            Simple process.
            <br />
            Powerful results.
          </h2>
        </div>

        <div className="steps">
          <div className="step">
            <span>01</span>
            <h3>Create Your Profile</h3>
            <p>Showcase your skills, experience and work.</p>
          </div>
          <div className="step">
            <span>02</span>
            <h3>Find Opportunities</h3>
            <p>Search jobs or find the perfect freelancer.</p>
          </div>
          <div className="step">
            <span>03</span>
            <h3>Start Working</h3>
            <p>Collaborate, complete projects and grow.</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>
          Ready to build something
          <span> amazing?</span>
        </h2>
        <p>Join FreelanceHub and start your next opportunity.</p>
        <button className="primary-btn">Get Started →</button>
      </section>
    </main>
  );
}

export default Home;

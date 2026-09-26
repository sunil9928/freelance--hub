function ApplicationForm({ job, onClose }) {
  return (
    <div className="form-overlay">
      <div className="application-form">
        <button className="close-btn" onClick={onClose}>
          ×
        </button>

        <h2>Apply for Job</h2>
        <p className="selected-job">{job.title}</p>

        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="tel" placeholder="Phone Number" required />
          <input type="text" placeholder="Your Skills" required />
          <input type="text" placeholder="Portfolio / GitHub URL" />
          <textarea placeholder="Tell us about yourself..." rows="5" required></textarea>

          <button type="submit" className="apply-submit">
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}

export default ApplicationForm;

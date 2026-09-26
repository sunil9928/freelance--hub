function JobCard({ image, title, company, skills, location, budget, onApply }) {
  return (
    <div className="job-card">
      <img src={image} alt={title} />

      <div className="job-info">
        <p className="job-company">{company}</p>
        <h3>{title}</h3>
        <p>{skills}</p>

        <div className="job-details">
          <span>📍 {location}</span>
          <strong>{budget}</strong>
        </div>

        <button onClick={onApply}>Apply Now</button>
      </div>
    </div>
  );
}

export default JobCard;

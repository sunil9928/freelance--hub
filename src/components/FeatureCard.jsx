function FeatureCard({ image, title, description, link }) {
  return (
    <div className="feature-card">
      <div className="feature-image">
        <img src={image} alt={title} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} className="feature-apply-btn">
        Apply Now
      </a>
    </div>
  );
}

export default FeatureCard;

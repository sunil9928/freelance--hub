import { useState } from "react";
import JobCard from "../components/JobCard";
import ApplicationForm from "../components/ApplicationForm";

function Jobs() {
  const [selectedJob, setSelectedJob] = useState(null);
  const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

  const jobs = [
    {
      image: asset("images/job1.jpg"),
      title: "React Website Development",
      company: "TechNova",
      skills: "React • JavaScript • CSS",
      location: "Replace Location",
      budget: "₹25K - ₹40K",
    },
    {
      image: asset("images/job2.jpg"),
      title: "UI/UX Design for Mobile App",
      company: "AppWorks",
      skills: "Figma • UI Design • UX",
      location: "Replace Location",
      budget: "₹15K - ₹30K",
    },
    {
      image: asset("images/job3.jpg"),
      title: "Business Dashboard",
      company: "DataFlow",
      skills: "Power BI • SQL • Excel",
      location: "Replace Location",
      budget: "₹30K - ₹50K",
    },
    {
      image: asset("images/job4.jpg"),
      title: "E-Commerce Website",
      company: "ShopGrid",
      skills: "React • Node.js • MongoDB",
      location: "Replace Location",
      budget: "₹40K - ₹70K",
    },
    {
      image: asset("images/job5.jpg"),
      title: "WordPress Website",
      company: "WordPress Project",
      skills: "WordPress • PHP • CSS",
      location: "Replace Location",
      budget: "₹20K - ₹35K",
    },
    {
      image: asset("images/job6.jpg"),
      title: "Python Data Analysis",
      company: "InsightLabs",
      skills: "Python • Pandas • SQL",
      location: "Replace Location",
      budget: "₹30K - ₹50K",
    },
  ];

  return (
    <main className="jobs-page">
      <section className="jobs-header">
        <span>FREELANCE OPPORTUNITIES</span>
        <h1>Find your next project.</h1>
        <p>Explore freelance jobs from companies and clients.</p>
      </section>

      <section className="jobs-grid">
        {jobs.map((job) => (
          <JobCard key={job.title} {...job} onApply={() => setSelectedJob(job)} />
        ))}
      </section>

      {selectedJob && <ApplicationForm job={selectedJob} onClose={() => setSelectedJob(null)} />}
    </main>
  );
}

export default Jobs;

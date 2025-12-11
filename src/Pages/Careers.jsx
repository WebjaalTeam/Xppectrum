import React, { useState } from "react";
import Footer from "../Components/Footer";
import "./Careers.css";

const jobs = [
  { title: "Frontend Developer", location: "Remote", experience: "2+ Years" },
  { title: "Backend Developer", location: "Bangalore", experience: "3+ Years" },
  { title: "UI/UX Designer", location: "Hyderabad", experience: "1-3 Years" },
  { title: "Flutter Developer", location: "Hyderabad", experience: "2-5 Years" },
  { title: "Graphic Designer", location: "Mumbai", experience: "1-3 Years" },
];

export default function Career() {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <div className="jobs-container">
      <h2>Open Positions</h2>
      {jobs.map((job, index) => (
        <div key={index} className="job-card">
            <div>
          <h3>{job.title}</h3>
          <p><strong>Location:</strong> {job.location} || <strong>Experience:</strong> {job.experience} </p>
          
            </div>
          <button
            className="apply-btn"
            onClick={() => setSelectedJob(job)}
          >
            Apply
          </button>
        </div>
      ))}

      {selectedJob && (
        <ApplyForm job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}
      <Footer/>
    </div>
  );
}

function ApplyForm({ job, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h3>Apply for {job.title}</h3>

        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="tel" placeholder="Phone number" required />
          <input type="file" accept=".pdf,.doc,.docx" />

          <textarea placeholder="Tell us about yourself"></textarea>

          <div className="modal-actions">
            <button type="submit" className="submit-btn">Submit</button>
            <button type="button" onClick={onClose} className="close-btn">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

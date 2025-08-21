import React from "react";
import "../App.css"; // or wherever your main css is

export default function Internships() {
  return (
    <section className="internships-section" id="internships">
      <h2 className="internships-title">Academic Internships</h2>

      <div className="internships-grid">
        
        {/* Internship 2 */}
        <div className="internship-card">
          <h3>MERN Internship</h3>
          <p className="internship-meta">SWECHA(Remote) | Jan 2025 – Apr 2025</p>
          <p>
            Developed a full-stack MERN application to provide e-books, PDFs, and video 
    lectures for rural students, ensuring accessibility in low-resource environments. 
    Built RESTful APIs with Node.js & Express.js, integrated MongoDB for scalable 
    data storage, and implemented user authentication for secure access. 
    Designed an interactive React.js frontend with responsive UI and deployed 
    the application.
          </p>
        </div>

    {/* Internship 1 */}
        <div className="internship-card">
          <h3>Cloud Engineering and DevOps</h3>
          <p className="internship-meta">Datavalley (Remote) | Jun 2024 – Aug 2024</p>
          <p>
            Practiced Agile methodology with a focus on iterative, sprint-based development. Gained hands-on experience with AWS services such as EC2, S3, and RDS to support scalable deployments. Explored AWS security practices and database management to ensure secure, efficient cloud solutions.
          </p>
        </div>





      </div>
    </section>
  );
}

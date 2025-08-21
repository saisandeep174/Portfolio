import React from "react";
import "./skills.css"; // we’ll reuse the same CSS for styling
import { FaNetworkWired, FaDatabase, FaBrain, FaProjectDiagram, FaCogs } from "react-icons/fa";

const courses = [
  { name: "Computer Networks", icon: <FaNetworkWired style={{ color: "#2563eb" }} />, description: "Understanding TCP/IP, routing, switching, and network protocols." },
  { name: "DBMS", icon: <FaDatabase style={{ color: "#a855f7" }} />, description: "Database design, normalization, SQL queries, and transactions." },
  { name: "Artificial Intelligence (AI)", icon: <FaBrain style={{ color: "#f43f5e" }} />, description: "Search algorithms, knowledge representation, and intelligent agents." },
  { name: "Machine Learning (ML)", icon: <FaProjectDiagram style={{ color: "#10b981" }} />, description: "Supervised and unsupervised learning, regression, and classification." },
  { name: "Deep Learning (DL)", icon: <FaBrain style={{ color: "#facc15" }} />, description: "Neural networks, CNNs, RNNs, and model training with large datasets." },
  { name: "Object-Oriented Programming (OOP)", icon: <FaCogs style={{ color: "#f97316" }} />, description: "Encapsulation, inheritance, polymorphism, and design principles." }
];

export default function Coursework() {
  return (
    <section className="skills-section" id="coursework">
      <h2 className="skills-title">Relevant Coursework</h2>
      <div className="skills-grid">
        {courses.map((course, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">{course.icon}</div>
            <h3 className="skill-name">{course.name}</h3>
            <p className="skill-description">{course.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

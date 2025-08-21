import React from "react";
import "./skills.css";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaAws,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaDocker
} from "react-icons/fa";

const skills = [
  { name: "React.js", icon: <FaReact style={{ color: "#61dafb" }} />, description: "Building interactive UIs and SPAs with React, hooks, and context." },
  { name: "Node.js", icon: <FaNodeJs style={{ color: "#3c873a" }} />, description: "Developing backend APIs and microservices using Express." },
  { name: "Python", icon: <FaPython style={{ color: "#ffde57" }} />, description: "Programming and Deep Learning projects." },
  { name: "Java", icon: <FaJava style={{ color: "#f89820" }} />, description: "Core Java concepts, object-oriented programming." },
  { name: "AWS", icon: <FaAws style={{ color: "#ff9900" }} />, description: "Deploying and managing cloud-native applications on AWS." },
  { name: "Databases", icon: <FaDatabase style={{ color: "#a855f7" }} />, description: "Working with MongoDB and MySQL." },
  { name: "HTML5", icon: <FaHtml5 style={{ color: "#e34c26" }} />, description: "Structuring semantic and accessible web pages." },
  { name: "CSS3", icon: <FaCss3Alt style={{ color: "#2965f1" }} />, description: "Responsive design with Flexbox, Grid, and animations." },
  { name: "JavaScript", icon: <FaJsSquare style={{ color: "#f7df1e" }} />, description: "ES6+, async programming, and DOM manipulation." },
  { name: "Git", icon: <FaGitAlt style={{ color: "#f1502f" }} />, description: "Version control system for tracking changes and collaboration." },
  { name: "GitHub", icon: <FaGithub style={{ color: "#fff" }} />, description: "Code hosting and collaboration using Git repositories." },
  { name: "Docker", icon: <FaDocker style={{ color: "#2496ed" }} />, description: "Containerization platform for packaging and deploying applications." }
];

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <h3 className="skill-name">{skill.name}</h3>
            <p className="skill-description">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

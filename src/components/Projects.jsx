import './components.css'
import ProjectCard from './ProjectCard'

const PROJECTS = [
  {
    title: 'Digital Library for Rural & Remote Areas',
    desc: 'A web-based digital library designed to improve access to educational resources for users in rural and remote areas. The platform allows users to search, read, and download books, while admins can manage the book collection via a secure admin panel.',
    tech: ['React', 'Express', 'MongoDB', 'Node.js'],
    demo: '#',
    repo: 'https://code.swecha.org/swecha-ap-internships/fullstack-2025/digital-library-for-rural-remote-areas-l02'
  },
  {
    title: 'Library-Management-System',
    desc: 'A console-based Library Management System built using Java and MySQL. This project helps manage books, users, and transactions such as issuing and returning books. Designed to demonstrate core concepts of RDBMS, JDBC, and object-oriented programming.',
    tech: ['Java','MySQL','JDBC'],
    demo: '#',
    repo: 'https://github.com/saisandeep174/Library-Management-System'
  },
  {
    title: 'Fargate App for MongoDB Record Retrieval',
    desc: 'This project is a Node.js application deployed on AWS Fargate, designed to retrieve records from a MongoDB database. The app demonstrates cloud-native deployment using Docker and AWS services, showcasing containerization and DevOps practices.',
    tech: ['MongoDB', 'HTML', 'CSS','AWS Fargate','Node.js','AWS ECR','AWS CloudWatch','Docker'],
    demo: '#',
    repo: 'https://github.com/saisandeep174/FargateApp'
  },
]

export default function Projects() {
  return (
    <div className="container">
      <h2 className="section-title">Selected Projects</h2>
      <div className="projects-grid">
        {PROJECTS.map(p => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </div>
  )
}

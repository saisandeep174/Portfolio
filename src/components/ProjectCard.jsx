import './components.css'

export default function ProjectCard({ title, desc, tech = [], demo, repo }) {
  return (
    <article className="project-card">
      
      <div className="project-body">
        <h4>{title}</h4>
        <p className="muted">{desc}</p>
        <div className="project-tech">
          {tech.map(t => <span key={t} className="tag">{t}</span>)}
        </div>
        <div className="project-links">
          {demo && <a href={demo} target="_blank" rel="noreferrer" className="link">Live</a>}
          {repo && <a href={repo} target="_blank" rel="noreferrer" className="link">Code</a>}
        </div>
      </div>
    </article>
  )
}

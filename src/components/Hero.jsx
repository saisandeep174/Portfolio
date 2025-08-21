import './components.css'

export default function Hero() {
  return (
    <div className="hero container">
      <div className="hero-left">
        <h1 className="hero-title">Hi, I'm <span>Sai Sandeep Jagabathula</span></h1>
        <p className="hero-sub">
          Cloud & Full-Stack Developer — building scalable cloud-native apps, performant UIs, and automated deployments.
        </p>

        <div className="hero-actions">
          <a className="btn" href="#projects">View Work</a>
          <a className="btn ghost" href="/certs/Sai_Sandeep_Jagabathula.pdf" target="_blank" rel="noreferrer">Download Resume</a>
        </div>

        <ul className="hero-meta">
          <li><strong>Location:</strong> India</li>
          <li><strong>Email:</strong> <a href="mailto:saisandeepjagabathula@gmail.com">saisandeepjagabathula@gmail.com</a></li>
        </ul>
      </div>

      <div className="hero-right">
        <div className="profile-card">
          <div className="avatar"><img src="/certs/picofme.png" alt="" /></div>
          <h3>Sai Sandeep Jagabathula</h3>
          <p className="muted">Cloud & Full-Stack Developer</p>
          <div className="skills-sm">
            
          </div>
        </div>
      </div>
    </div>
  )
}

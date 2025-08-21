import './components.css'

export default function Navbar() {
  return (
    <header className="nav-wrap">
      <div className="nav-inner">
        <div className="brand">
          <a href="#home" className="brand-link">
            <span className="brand-accent">Sai Sandeep Jagabathula</span>
          </a>
        </div>

        <nav className="nav">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact" className="cta">Contact</a>
        </nav>

        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          onClick={() => {
            document.documentElement.classList.toggle('nav-open')
          }}
        >☰</button>
      </div>
    </header>
  )
}

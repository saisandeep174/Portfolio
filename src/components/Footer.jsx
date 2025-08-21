import './components.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>© {new Date().getFullYear()} Sai Sandeep</div>
        <div className="socials">
          <a href="https://github.com/saisandeep174" target="_blank" aria-label="GitHub">GitHub</a>
          <a href="https://www.linkedin.com/in/sai-sandeep-jagabathula-00aa8128b/" target="_blank" aria-label="LinkedIn">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}

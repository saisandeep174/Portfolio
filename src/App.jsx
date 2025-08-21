import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Coursework from './components/Coursework'
import Certifications from './components/Certifications'
import Internships from './components/Intrernships'

function App() {
  return (
    <div className="site">
      <Navbar />
      <main>
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="internships"><Internships></Internships>        </section>
        <section id="skills"><Skills /></section>
        <section id="coursework"><Coursework /></section>
        <section id="projects"><Projects /></section>
        <section id="certifications"><Certifications></Certifications></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </div>
  )
}

export default App

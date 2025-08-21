import './components.css'
import FadeInSection from "./FadeInSection";

export default function About() {
  return (
    <FadeInSection>

            <div className="container about-wrap">
      <div className="about-grid">
        <div className="about-card">
          <h2>About me</h2>
          <p>
            Technically strong Information Technology graduate with hands-on
 experience in Java and Python programming, data structures and problem
solving. Familiar with cloud concepts and modern development tools like
 Git and SQL. Proven ability to learn quickly through academic projects and
 independent practice. Looking to apply my skills in a challenging role
 where I can solve real-world problems, grow technically, and contribute to
 impactful software solutions.
          </p>

          <h2>Education</h2>
          <h4>B. Tech in Information Technology(2021-2025)</h4>
          <h4>Lakireddy Bali Reddy College of Engineering (Autonomous), Andhra Pradesh</h4>
        </div>

        <div className="about-card">
          <h3>Highlights</h3>
          <ul className="highlights">
            <li>AWS Cloud Foundation & practical deployments</li>
            <li>MERN stack projects & CI/CD pipelines</li>
            <li>Paper titled "An Ensemble Deep Learning Model Using CNN, LSTM, and Autoencoder for EEG-Based Parkinson’s Disease Classification" accepted at ISAC3 2025.</li>
            <li>Team lead for final-year project on Parkinson's detection</li>
          </ul>
        </div>
      </div>
    </div>
    </FadeInSection>

  )
}

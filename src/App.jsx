import React from 'react';
import './App.css';

function App() {
  const name = "Chenlan";

  return (
    <div className="App">
      <header className="header">
        <div className="profile-container">
          <img src={`${import.meta.env.BASE_URL}my-photo.jpg`} alt="Chenlan" className="profile-img" />
        </div>
        <h1>
          {name}<span className="accent-text">.</span>
        </h1>
        <p className="tagline">
          Undergraduate Aerospace Engineering Student @ QMUL. 
          Focusing on Robotics, AI, and Autonomous Systems.
        </p>
      </header>

      <main className="content">
        <section>
          <h2>Who am I?</h2>
          <p className="about-text">
            I’m a future engineer passionate about the intersection of <span className="highlight">Robotics</span>, 
            <span className="highlight">Deep Learning</span>, and Aerospace design. 
            Currently exploring the world of <span className="highlight">Python</span> to build smarter, autonomous systems.
          </p>
        </section>

        <section>
          <h2>Focus</h2>
          <div className="skills-list">
            <span className="skill-item">PYTHON.</span>
            <span className="skill-item">ROBOTICS.</span>
            <span className="skill-item">DEEP LEARNING.</span>
            <span className="skill-item">AEROSPACE.</span>
            <span className="skill-item">AI.</span>
          </div>
        </section>

        <section>
          <h2>Academic</h2>
          <div className="edu-item">
            <h3 className="edu-title">Queen Mary University of London</h3>
            <p className="edu-meta">BEng Aerospace Engineering | Robotics & AI Pathway</p>
            <p style={{color: 'var(--text-muted)'}}>Focusing on autonomous flight, neural networks, and system architecture.</p>
          </div>
        </section>

        <section style={{textAlign: 'center', padding: '4rem 0'}}>
          <h2>Resume</h2>
          <div style={{marginTop: '2rem'}}>
            <a 
              href={`${import.meta.env.BASE_URL}resume.pdf`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="resume-btn"
            >
              Get Resume PDF
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} {name}. Built for the future of Aerospace.</p>
      </footer>
    </div>
  );
}

export default App;

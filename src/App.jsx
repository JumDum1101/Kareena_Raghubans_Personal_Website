import { useState, useEffect } from 'react';
import './App.css';
//redeploy
function App() {
  const [profileImage, setProfileImage] = useState('/kareena-photo.jpg'); // Use your photo by default

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Raghubans_Kareena_Resume.pdf';
    link.download = 'Kareena_Raghubans_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.skill-card, .project-card, .interest-card, .about-content');
    elements.forEach((el) => observer.observe(el));

    // Parallax effect
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.skill-card, .project-card, .interest-card');

      parallaxElements.forEach((el, index) => {
        const speed = 0.5 + index * 0.1;
        const yPos = -(scrolled * speed / 100);
        el.style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <header>
        <nav>
          <div className="logo">Kareena Raghubans</div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#interests">Interests</a></li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <div className="container">
          <div className="profile-image">
          <img src="/kareena-photo.jpg" alt="Kareena Raghubans" className="profile-image-display" />          
          </div>
          <h1>Kareena Raghubans</h1>
          <h2>Software Engineer & Computer Science Student</h2>
          <p>
            I’m a passionate builder who loves turning ideas into intuitive, meaningful applications that make people’s lives easier. Whether it’s creating seamless user experiences, designing smart backend systems, or mentoring new developers, I’m driven by the impact technology can have when it’s built with care. I’m currently pursuing my B.S./M.S. in Computer Science at the University of Central Florida, where I’m exploring the intersections of AI, full-stack development, and human-centered design.
          </p>

          <div className="social-links">
            <div className="social-links-row">
              <a href="https://www.linkedin.com/in/kareena-raghubans" target="_blank" rel="noopener noreferrer">
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/JumDum1101" target="_blank" rel="noopener noreferrer">
                <span>GitHub</span>
              </a>
              <a href="mailto:karaghubans@gmail.com">
                <span>Email</span>
              </a>
            </div>
            <button className="resume-btn" onClick={downloadResume}>
              <span>📄 Download Resume</span>
            </button>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <h3>Education & Experience</h3>
            <p>
              I'm currently enrolled in the Accelerated B.S./M.S. program in Computer Science at
              the University of Central Florida, maintaining a 3.6 GPA while pursuing a minor in
              Statistics. My academic journey has been recognized with multiple honors including the
              UCF Dean's List and NCWIT Rising Star Award.
            </p>

            <h3>Professional Work</h3>
            <p>
              At CodeNook, I serve as a Part-Time Software Engineer developing Generative AI client components with React.js and TypeScript. I architect and maintain AWS-powered infrastructure using Cognito for user identity, SNS for cross-service communication, and Lambda for event-based automation. By improving the authentication pipeline and streamlining user management workflows, I enhanced system reliability and user retention, helping scale the platform from 2 to 13 active customers.
            </p>

            <h3>Giving Back</h3>
            <p>
              I'm deeply committed to mentorship through Girls Who Code, where I guide both high school and college students in learning programming fundamentals and building confidence in their technical skills. Helping others discover that coding can be both approachable and empowering is one of my greatest passions.
            </p>
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <h3>Languages</h3>
              <div className="skill-tags">
                <span className="tag">JavaScript</span>
                <span className="tag">Python</span>
                <span className="tag">Java</span>
                <span className="tag">C</span>
                <span className="tag">TypeScript</span>
                <span className="tag">SQL</span>
                <span className="tag">R</span>
                <span className="tag">HTML/CSS</span>
              </div>
            </div>

            <div className="skill-card">
              <h3>Frameworks & Libraries</h3>
              <div className="skill-tags">
                <span className="tag">React.js</span>
                <span className="tag">Node.js</span>
                <span className="tag">Angular</span>
                <span className="tag">Django</span>
                <span className="tag">Tailwind CSS</span>
              </div>
            </div>

            <div className="skill-card">
              <h3>Tools & Platforms</h3>
              <div className="skill-tags">
                <span className="tag">AWS</span>
                <span className="tag">GitHub</span>
                <span className="tag">MySQL</span>
                <span className="tag">Firebase</span>
                <span className="tag">MongoDB</span>
                <span className="tag">Figma</span>
                <span className="tag">Jupyter Notebook</span>
                <span className="tag">Visual Studio</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>Atticus - Legal Case Management AI</h3>
              <p>
                Built a legally-informed AI assistant that transforms chaotic client communications
                into structured case intelligence. Atticus identifies deadlines, missing records, and
                next steps automatically using AI specialists powered by Google Gemini API, with voice
                bot integration and real-time task management.
              </p>
              <p style={{ fontSize: '0.9rem', color: '#a17388', marginTop: '0.5rem' }}>
                <strong>My Role:</strong> Integrated AWS Cognito authentication system, developed
                authentication APIs, and built frontend components for user login/signup flows.
              </p>
              <div className="skill-tags">
                <span className="tag">React.js</span>
                <span className="tag">TypeScript</span>
                <span className="tag">Firebase</span>
                <span className="tag">AWS Cognito</span>
                <span className="tag">Gemini API</span>
                <span className="tag">ElevenLabs</span>
              </div>
              <a
                href="https://devpost.com/software/atticus"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View on Devpost →
              </a>
            </div>
            <div className="project-card">
              <h3>Cairos - Scheduling and Availability Platform</h3>
              <p>
                Built a scheduling platform that helps groups coordinate availability and find meeting times that work for everyone. Cairos connects to users’ calendars, collects their availability, and identifies shared time slots. Once a meeting is confirmed, it automatically adds the event to each participant’s calendar. The platform also supports user sign-in, email notifications, and simple tools for creating and managing bookings.
              </p>
              <p style={{ fontSize: '0.9rem', color: '#a17388', marginTop: '0.5rem' }}>
                <strong>My Role:</strong> Implemented SendGrid-based email authentication, built backend APIs for user verification and availability syncing, and developed the booking and time-finding logic that selects optimal meeting windows. Integrated email notifications to confirm scheduled meetings.
              </p>
              <div className="skill-tags">
                <span className="tag">React.js</span>
                <span className="tag">Javascript</span>
                <span className="tag">MongoDB</span>
                <span className="tag">SendGrid</span>
                <span className="tag">Google Calendar APIs</span>
                <span className="tag">Flutter</span>
              </div>
              <a
                href="https://www.youtube.com/watch?v=4dP1Sn3qUTA"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Demo →
              </a>
            </div>
            <div className="project-card">
              <h3>Theme Park Snack Recommender</h3>
              <p>
                Building a full-stack web application that recommends theme park foods based on user
                cravings, complete with location and price details. Features a React frontend and
                Node.js backend.
              </p>
              <p style={{ fontSize: '0.9rem', color: '#a17388', marginTop: '0.5rem' }}>
                <strong>My Role (In Progress):</strong> Created snack and location database schemas,
                implemented portions of user authentication system.
              </p>
              <div className="skill-tags">
                <span className="tag">React</span>
                <span className="tag">Node.js</span>
                <span className="tag">Full-Stack</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="interests">
        <div className="container">
          <h2 className="section-title">Interests & Passions</h2>
          <div className="interests-grid">
            <div className="interest-card">
              <div className="interest-icon">💻</div>
              <h3>AI & Machine Learning</h3>
              <p>Exploring generative AI and building intelligent applications that solve real-world problems</p>
            </div>

            <div className="interest-card">
              <div className="interest-icon">👩‍🏫</div>
              <h3>Mentorship</h3>
              <p>Empowering young women in tech through Girls Who Code and making programming accessible to all</p>
            </div>

            <div className="interest-card">
              <div className="interest-icon">🎨</div>
              <h3>UI/UX Design</h3>
              <p>Creating beautiful, intuitive interfaces that prioritize user experience</p>
            </div>

            <div className="interest-card">
              <div className="interest-icon">📊</div>
              <h3>Data Analysis</h3>
              <p>Applying statistical methods and computational tools to interpret complex datasets</p>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; 2025 Kareena Raghubans. Built with passion in Orlando, Florida.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
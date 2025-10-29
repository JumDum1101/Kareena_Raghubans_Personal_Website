import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [profileImage, setProfileImage] = useState('public/kareena-photo.jpg'); // Use your photo by default

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

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
          <div className="image-upload-section">
            <div 
              className="upload-placeholder" 
              onClick={() => document.getElementById('profileImageInput').click()}
              style={profileImage ? {
                backgroundImage: `url(${profileImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              } : {}}
            >
              {!profileImage && <span id="imagePreview">👋</span>}
            </div>
            <input
              type="file"
              id="profileImageInput"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={handleImageUpload}
            />
          </div>

          <h1>Kareena Raghubans</h1>
          <h2>Software Engineer & Computer Science Student</h2>
          <p>
            I'm passionate about building intuitive, impactful applications and mentoring the next
            generation of developers. Currently pursuing my B.S./M.S. in Computer Science at UCF.
          </p>

          <div className="social-links">
            <div className="social-links-row">
              <a href="https://www.linkedin.com/in/kareena-raghubans" target="_blank" rel="noopener noreferrer">
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/kareenaraghubans" target="_blank" rel="noopener noreferrer">
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
              the University of Central Florida, maintaining a 3.5 GPA while pursuing a minor in
              Statistics. My academic journey has been recognized with multiple honors including the
              UCF Dean's List and NCWIT Rising Star Award.
            </p>

            <h3>Professional Work</h3>
            <p>
              As a Part-Time Software Engineer at CodeNook - LingoAI, I develop Generative AI client
              components using React.js and work with AWS services including Cognito, SNS, and Lambda.
              I've helped the platform grow from 2 to 13 customers by implementing seamless
              authentication and user management systems.
            </p>

            <h3>Giving Back</h3>
            <p>
              I'm deeply committed to mentorship through Girls Who Code, where I guide both high
              school and college students in learning programming fundamentals and building their
              careers in tech. Making coding approachable and fun for the next generation is one of
              my greatest passions.
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
                <span className="tag">Tailwind CSS</span>
              </div>
            </div>

            <div className="skill-card">
              <h3>Tools & Platforms</h3>
              <div className="skill-tags">
                <span className="tag">AWS</span>
                <span className="tag">GitHub</span>
                <span className="tag">MySQL</span>
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
              <h3>LingoAI - Generative AI Platform</h3>
              <p>
                A Generative AI platform that empowers businesses to create customized social media
                content tailored to their brand voice and target audience. The platform provides an
                intuitive interface for users to input business specifics and generate professional
                content at scale.
              </p>
              <p style={{ fontSize: '0.9rem', color: '#a17388', marginTop: '0.5rem' }}>
                <strong>My Role:</strong> Built Generative AI client components in React.js,
                integrated AWS Cognito for authentication and user data management, implemented OpenAI
                API for content generation, and developed AWS Lambda functions with SNS for automated
                monthly account credit notifications.
              </p>
              <div className="skill-tags">
                <span className="tag">React.js</span>
                <span className="tag">AWS</span>
                <span className="tag">OpenAI API</span>
              </div>
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
              <div className="interest-icon">🏆</div>
              <h3>Competitive Programming</h3>
              <p>First place winner at Lockheed Martin Code Quest 2022, passionate about problem-solving challenges</p>
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
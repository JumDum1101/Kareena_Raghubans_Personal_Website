import { useEffect } from 'react';

import './App.css';

//redeploy

function App() {

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

              the University of Central Florida, maintaining a 3.67 GPA while pursuing a minor in Statistics. My graduate-level focus is Machine Learning and Artificial Intelligence, and I have been recognized with honors including the UCF Dean's List and NCWIT Rising Star Award.

            </p>



            <h3>Professional Work</h3>

            <p>

              I’m currently a Software Engineer Intern at Leidos, where I work on enterprise applications across the full stack. My work includes developing frontend features and user interfaces with React and TypeScript, building backend APIs, working with Java, and writing SQL for Oracle and Microsoft SQL Server databases. I also collaborate with engineers to understand requirements, research solutions, and improve existing applications. Previously, at CodeNook, I worked on an AI-powered platform where I built React components and integrated services including AWS Cognito, OpenAI APIs, SNS, and Lambda, helping support the platform as it grew from 2 to 13 customers.
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

                <span className="tag">PHP</span>

              </div>

            </div>



            <div className="skill-card">

              <h3>Frameworks & Libraries</h3>

              <div className="skill-tags">
                <span className="tag">React.js</span>
                <span className="tag">Node.js</span>
                <span className="tag">Express.js</span>
                <span className="tag">Angular</span>
                <span className="tag">Tailwind CSS</span>
                <span className="tag">NumPy</span>
                <span className="tag">Matplotlib</span>
                <span className="tag">Pandas</span>
                <span className="tag">Scikit-learn</span>
              </div>

            </div>



            <div className="skill-card">

              <h3>Tools & Platforms</h3>

              <div className="skill-tags">
                <span className="tag">AWS</span>
                <span className="tag">Firebase</span>
                <span className="tag">Git</span>
                <span className="tag">GitHub</span>
                <span className="tag">Figma</span>
                <span className="tag">Jupyter Notebook</span>
                <span className="tag">Hugging Face Transformers</span>
                <span className="tag">MySQL</span>
                <span className="tag">PostgreSQL</span>
                <span className="tag">MongoDB</span>
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
              <h3>Crochet Chart Parser & Interactive Learning Platform</h3>
              <p>
                Senior Design project focused on turning visual crochet charts into a more interactive
                learning experience. I’m annotating crochet chart datasets and researching computer vision
                methods for recognizing stitch types, positions, and spatial relationships within patterns.
              </p>
              <p style={{ fontSize: '0.9rem', color: '#a17388', marginTop: '0.5rem' }}>
                <strong>My Role (In Progress):</strong> Designing the application UI in Figma and planning
                a React and TypeScript interface where users can upload patterns, view generated instructions,
                and follow crochet charts interactively.
              </p>
              <div className="skill-tags">
                <span className="tag">Computer Vision</span>
                <span className="tag">React</span>
                <span className="tag">TypeScript</span>
                <span className="tag">Figma</span>
              </div>
            </div>

            <div className="project-card">
              <h3>Forest Cover Type Classification Using Logistic Regression and Decoder-Only LLMs</h3>
              <p>
                Built and evaluated Logistic Regression and DistilGPT-2 models on the 581K-sample UCI
                Covertype dataset and reformatted structured tabular data into prompt-based inputs for
                decoder-only LLM training.
              </p>
              <p style={{ fontSize: '0.9rem', color: '#a17388', marginTop: '0.5rem' }}>
                <strong>My Role:</strong> Implemented preprocessing, feature scaling, class balancing,
                and hyperparameter tuning for the classification pipeline.
              </p>
              <div className="skill-tags">
                <span className="tag">Python</span>
                <span className="tag">Scikit-learn</span>
                <span className="tag">DistilGPT-2</span>
                <span className="tag">Hugging Face</span>
              </div>
            </div>

            <div className="project-card">
              <h3>Cairos - Scheduling & Availability Platform</h3>
              <p>
                Developed a full-stack scheduling platform using React, TypeScript, Node.js, Express,
                and MongoDB that aggregates user availability and computes optimal meeting times using
                constraint-based scheduling logic.
              </p>
              <p style={{ fontSize: '0.9rem', color: '#a17388', marginTop: '0.5rem' }}>
                <strong>My Role:</strong> Designed RESTful APIs for availability processing, booking workflows,
                and conflict detection, integrated Google Calendar for real-time synchronization, and built
                secure email-based authentication using SendGrid.
              </p>
              <div className="skill-tags">
                <span className="tag">React</span>
                <span className="tag">TypeScript</span>
                <span className="tag">Node.js</span>
                <span className="tag">Express</span>
                <span className="tag">MongoDB</span>
                <span className="tag">Google Calendar API</span>
                <span className="tag">SendGrid</span>
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
              <h3>Atticus - AI Legal Assistant</h3>
              <p>
                Designed a multi-stage LLM pipeline using Google Gemini to classify, summarize, and extract
                structured outputs from unstructured legal client data, with prompt engineering to improve
                response consistency and reduce hallucinations.
              </p>
              <p style={{ fontSize: '0.9rem', color: '#a17388', marginTop: '0.5rem' }}>
                <strong>My Role:</strong> Integrated AWS Cognito authentication and Firebase Firestore,
                and built Node.js API layers to manage model interactions and structured data flow.
              </p>
              <div className="skill-tags">
                <span className="tag">Google Gemini</span>
                <span className="tag">Node.js</span>
                <span className="tag">AWS Cognito</span>
                <span className="tag">Firebase Firestore</span>
                <span className="tag">Prompt Engineering</span>
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

          <p>© 2026 Kareena Raghubans. Built with passion in Orlando, Florida.</p>

        </div>

      </footer>

    </div>

  );

}



export default App;
import React from "react";
import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "Enhancing ATM Security: A Finger Vein Biometrics",
    technologies: "MATLAB",
    date: "Publication January 2024",
    description: [
      "Designed a real-time embedded system to enhance ATM security using finger-vein detection and CNN algorithms.",
      "Integrated image processing techniques for accurate biometric authentication.",
      "Developed an intuitive user interface with real-time feedback on an embedded display.",
      "Implemented GSM technology for instant transaction verification and enhanced security.",
      "Published in IEEE 2024 2nd International Conference on Networking and Communications (ICNWC).",
    ],
    link: "https://ieeexplore.ieee.org/document/10537537",
  },
  {
    id: 2,
    title: "Eye Blink-Based SOS Communication and Defense Application",
    technologies: "Python",
    date: "September 2023",
    description: [
      "Enhanced emergency communication by transmitting distress signals through eye blinks using globally recognized SOS signals.",
      "Practical applications in emergency services, disaster relief, healthcare, public safety, underwater navigation, and cybersecurity.",
      "Deepened understanding of Morse code as a universal code for distress signals in critical communication scenarios.",
    ],
  },
];

const Projects = () => {
  return (
    <section className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          Here are some of the projects I've worked on, showcasing my technical
          skills and problem-solving abilities.
        </p>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-meta">
                  <span className="project-tech">{project.technologies}</span>
                  <span className="project-date">{project.date}</span>
                </div>
              </div>
              <ul className="project-description">
                {project.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    marginTop: 12,
                    padding: "10px 22px",
                    background:
                      "linear-gradient(90deg, #1fa2ff 0%, #12d8fa 50%, #a6ffcb 100%)",
                    color: "#fff",
                    borderRadius: 8,
                    fontWeight: 500,
                    textDecoration: "none",
                    fontSize: "1rem",
                    boxShadow: "0 2px 8px rgba(30,144,255,0.12)",
                    transition: "background 0.3s, transform 0.2s",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                >
                  View Paper
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

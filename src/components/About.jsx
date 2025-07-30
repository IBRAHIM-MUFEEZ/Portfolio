import React from "react";
import "./About.css";

const About = () => {
  const education = [
    {
      id: 1,
      degree: "MERN Stack Development Trainee",
      institute: "NxtWave",
      year: "Dec 2024 - Present",
    },
    {
      id: 2,
      degree: "MBA (Master of Business Administration) in Finance Management",
      institute: "Andhra University",
      year: "Sept 2024 - Present",
    },
    {
      id: 3,
      degree:
        "Bachelor of Technology (B.Tech.) in Computer Science and Engineering (Information Technology)",
      institute: "SRM Institute of Science and Technology",
      year: "2020 - 2024",
      gpa: "GPA: 8.46/10",
    },
    {
      id: 4,
      degree: "Higher Secondary",
      institute: "Sri Chaitanya Junior College",
      year: "2018 - 2020",
      percentage: "90.6%",
    },
    {
      id: 5,
      degree: "Secondary",
      institute: "Don Bosco's English Medium High School",
      year: "2017 - 2018",
      gpa: "GPA: 9.5/10",
    },
  ];

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h2 className="section-title">About Me</h2>
          <p className="about-text">
            I'm a passionate frontend developer with expertise in React.js and
            building clean, functional user interfaces. Currently enhancing my
            skills as a MERN Stack Development Trainee at NxtWave.
          </p>
          <p className="about-text">
            My technical skills include Python programming, database management
            (PostgreSQL, MySQL), JavaScript, and Object-Oriented Programming
            principles. I enjoy solving complex problems and creating efficient,
            scalable solutions.
          </p>
        </div>
        <div className="education-timeline">
          <h3 className="timeline-title">Education</h3>
          <div className="timeline">
            {education.map((item) => (
              <div key={item.id} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>{item.degree}</h4>
                  <p className="institute">{item.institute}</p>
                  <p className="year">{item.year}</p>
                  {item.gpa && <p className="details">{item.gpa}</p>}
                  {item.percentage && (
                    <p className="details">{item.percentage}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

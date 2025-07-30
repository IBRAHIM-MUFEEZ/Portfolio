import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const toRotate = [
    "Frontend Developer",
    "MERN Stack Trainee",
    "Problem Solver",
  ];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % toRotate.length;
      const fullText = toRotate[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">Mufeez</span>
        </h1>
        <h2 className="hero-subtitle">
          <span className="typewriter">{text}</span>
          <span className="cursor">|</span>
        </h2>
        <p className="hero-description">
          I build responsive, interactive web applications with clean code and
          intuitive user interfaces.
        </p>
        <div className="hero-buttons">
          <button
            className="button primary"
            onClick={() => navigate("/projects")}
          >
            View My Projects
          </button>
          <button
            className="button secondary"
            onClick={() => navigate("/contact")}
          >
            Contact Me
          </button>
        </div>
      </div>
      <div className="hero-image">
        <div className="animated-circle">
          <img
            src="/IMG_2314-PhotoRoom-modified.png"
            alt="Mufeez Ibrahim"
            className="profile-pic"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;

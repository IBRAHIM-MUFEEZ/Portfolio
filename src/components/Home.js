import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">Mufeez</span>
        </h1>
        <h2 className="hero-subtitle">
          Frontend Developer & MERN Stack Trainee
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
        <div className="animated-circle"></div>
      </div>
    </section>
  );
};

export default Home;

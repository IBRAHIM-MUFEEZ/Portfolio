import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState(null);

  const getWeatherIcon = (code) => {
    switch (code) {
      case 0:
        return "fas fa-sun";
      case 1:
      case 2:
      case 3:
        return "fas fa-cloud-sun";
      case 45:
      case 48:
        return "fas fa-smog";
      case 51:
      case 53:
      case 55:
        return "fas fa-cloud-rain";
      case 56:
      case 57:
        return "fas fa-snowflake";
      case 61:
      case 63:
      case 65:
        return "fas fa-cloud-showers-heavy";
      case 66:
      case 67:
        return "fas fa-cloud-sleet";
      case 71:
      case 73:
      case 75:
      case 85:
      case 86:
        return "fas fa-snowflake";
      case 77:
        return "fas fa-snowflake";
      case 80:
      case 81:
      case 82:
        return "fas fa-cloud-showers-heavy";
      case 95:
      case 96:
      case 99:
        return "fas fa-bolt";
      default:
        return "fas fa-question-circle";
    }
  };

  useEffect(() => {
    const fetchWeatherData = async (lat, lon) => {
      try {
        const [weatherResponse, geoResponse] = await Promise.all([
          fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
          ),
          fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`
          ),
        ]);
        const weatherData = await weatherResponse.json();
        const geoData = await geoResponse.json();

        if (weatherData && weatherData.current_weather)
          setWeather(weatherData.current_weather);
        if (geoData) setLocation(geoData);
      } catch (error) {
        console.error("Failed to fetch weather data", error);
      }
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        fetchWeatherData(position.coords.latitude, position.coords.longitude);
      });
    }
  }, []);

  return (
    <header className="navbar">
      <div className="navbar-left">
        <h1 className="logo">Mohammad Mufeez Ibrahim</h1>
        <div className="weather-display">
          {weather && location && (
            <>
              <i
                className={`weather-icon-header ${getWeatherIcon(
                  weather.weathercode
                )}`}
              ></i>
              <span className="location-name-header">{location.city}</span>
              <span className="temperature-header">
                {Math.round(weather.temperature)}°C
              </span>
            </>
          )}
        </div>
        {/* A separate theme toggle for mobile view */}
        <button onClick={toggleTheme} className="theme-toggle-mobile">
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>

      <nav className="nav-links-desktop">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/about" className="nav-link">
          About
        </Link>
        <Link to="/skills" className="nav-link">
          Skills
        </Link>
        <Link to="/projects" className="nav-link">
          Projects
        </Link>
        <Link to="/contact" className="nav-link">
          Contact
        </Link>
      </nav>

      <div className="navbar-right">
        {/* The original theme toggle for desktop view */}
        <button onClick={toggleTheme} className="theme-toggle-desktop">
          {theme === "light" ? "🌙" : "☀️"}
        </button>
        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className={`bar ${isMenuOpen ? "change" : ""}`}></div>
          <div className={`bar ${isMenuOpen ? "change" : ""}`}></div>
          <div className={`bar ${isMenuOpen ? "change" : ""}`}></div>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="nav-links-mobile">
          <Link
            to="/"
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/skills"
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Skills
          </Link>
          <Link
            to="/projects"
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;

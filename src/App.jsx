import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Loader from "./components/Loader";
import "./App.css";

const AppContent = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  const [theme, setTheme] = useState(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return prefersDark ? "dark" : "light";
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleThemeChange = (e) => {
      setTheme(e.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleThemeChange);
    };
  }, [theme]);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="app-container">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className="app-content">
        {loading ? (
          <Loader />
        ) : (
          <Routes>
            {/* Pass the theme to the Home component */}
            <Route path="/" element={<Home theme={theme} />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        )}
      </main>
    </div>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;

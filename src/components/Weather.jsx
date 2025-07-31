import React, { useState, useEffect } from "react";
import "./Weather.css";

const Weather = ({ theme }) => {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch weather and location data
    const fetchData = async (lat, lon) => {
      try {
        // Fetch both weather and location name concurrently
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

        if (weatherData && weatherData.current_weather) {
          setWeather(weatherData.current_weather);
        } else {
          setError("Could not fetch weather data.");
        }

        if (geoData) {
          setLocation({
            city: geoData.city,
            country: geoData.countryName,
          });
        }
      } catch (err) {
        setError("Failed to connect to the weather service.");
      }
    };

    // Function to get the user's location
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            fetchData(position.coords.latitude, position.coords.longitude);
          },
          () => {
            setError("Location access denied. Enable it to see the weather.");
          }
        );
      } else {
        setError("Geolocation is not supported by this browser.");
      }
    };

    getLocation();
  }, []);

  if (error) {
    return <div className={`weather-container ${theme}`}>{error}</div>;
  }

  if (!weather || !location) {
    return (
      <div className={`weather-container ${theme}`}>Loading weather...</div>
    );
  }

  return (
    <div className={`weather-container ${theme}`}>
      <div className="weather-info">
        <span className="location-name">
          {location.city}, {location.country}
        </span>
        <span className="weather-temp">{weather.temperature}°C</span>
        <span className="weather-condition">
          Wind: {weather.windspeed} km/h
        </span>
      </div>
    </div>
  );
};

export default Weather;

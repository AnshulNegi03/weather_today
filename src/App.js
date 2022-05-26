import React, { useState } from "react";
import styled from "styled-components";
import Axios from "axios";
import CityComponent from "./modules/CityComponent";
import WeatherComponent from "./modules/WeatherInfoComponent";
import './app.css';
export const WeatherIcons = {
  "01d": "weather_today/icons/sunny.svg",
  "01n": "weather_today/icons/night.svg",
  "02d": "weather_today/icons/day.svg",
  "02n": "weather_today/icons/cloudy-night.svg",
  "03d": "weather_today/icons/cloudy.svg",
  "03n": "weather_todayicons/cloudy.svg",
  "04d": "weather_today/icons/perfect-day.svg",
  "04n": "weather_today/icons/cloudy-night.svg",
  "09d": "weather_today/icons/rain.svg",
  "09n": "weather_today/icons/rain-night.svg",
  "10d": "weather_today/icons/rain.svg",
  "10n": "weather_today/icons/rain-night.svg",
  "11d": "weather_today/icons/storm.svg",
  "11n": "weather_today/icons/storm.svg",
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  padding: 20px 10px;
  margin: auto;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 #555;
  background: #f0f0f0;
  font-family: Montserrat;
`;

const AppLabel = styled.span`
  color: black;
  margin: 0px auto;
  font-size: 18px;
  font-weight: bold;
`;
const CloseButton = styled.span`
  padding: 2px 3px;
  background-color: black;
  border-radius: 50%;
  color: white;
  position: absolute;
`;

function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e01a8d7daf2e7f6d143c776feac2c016`,
    );
    updateWeather(response.data);
  };
  return (
    <Container>
      <style>
@import url('https://fonts.googleapis.com/css2?family=Merienda&display=swap');
</style> 
      <AppLabel><p className="title">React Weather App</p></AppLabel>
      {city && weather ? (
        <WeatherComponent weather={weather} city={city} />
      ) : (
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
    </Container>
  );
}

export default App;

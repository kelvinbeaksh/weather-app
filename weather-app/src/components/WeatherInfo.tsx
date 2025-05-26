import React from "react";
import { WeatherData } from "../types/weather";
import "./WeatherINfo.css";

interface Props {
  data: WeatherData;
}

const WeatherInfo: React.FC<Props> = ({ data }) => (
  <div>
    <p className="header">Today's Weather</p>
    <p className="header-temperature">{data.main.temp}°C</p>
    <div className="humidity-section">
      <p>H: {data.main.humidity}%</p>
      <p>L: {data.main.humidity}%</p>
    </div>
    <h2>
      {data.name}, {data.sys.country}
    </h2>
    <p>{data.weather[0].description}</p>
    <img
      src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
      alt="Weather Icon"
    />
  </div>
);

export default WeatherInfo;

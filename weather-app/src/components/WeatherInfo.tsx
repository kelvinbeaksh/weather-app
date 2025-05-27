import React from "react";
import { WeatherData } from "../types/weather";
import "./WeatherInfo.css";

interface Props {
  data: WeatherData;
}

const WeatherInfo: React.FC<Props> = ({ data }) => (
  <div>
    <div className="header">Today's Weather</div>
    <div className="header-temperature">{data.main.temp}°</div>
    <div className="humidity-section">
      <div>H: {data.main.humidity}%</div>
      <div>L: {data.main.humidity}%</div>
    </div>
    <div className="location-description-section">
      <div>
        {data.name}, {data.sys.country}
      </div>
      <div>{data.datetime}</div>
      <div>{data.main.humidity}%</div>
      <div>{data.weather[0].description}</div>
    </div>
  </div>
);

export default WeatherInfo;

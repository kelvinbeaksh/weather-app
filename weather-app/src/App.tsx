import React, { useState } from "react";
// import WeatherForm from "./components/WeatherForm";
import WeatherInfo from "./components/WeatherInfo";
import SearchHistory from "./components/SearchHistory";
import { WeatherData } from "./types/weather";
import "./App.css";
import weatherData from "./sample-data.json";
import historyData from "./sample-history.json";

// const API_KEY = "YOUR_OPENWEATHER_API_KEY"; // Replace with your actual API key

const App: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData | null>(weatherData);
  const [history, setHistory] = useState<any[]>(historyData);
  console.log("History:", history);
  // const searchWeather = (city: string, country: string) => {
  //   const query = `${city},${country}`;
  //   const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${API_KEY}`;

  //   const xhr = new XMLHttpRequest();
  //   xhr.open("GET", url);
  //   xhr.onreadystatechange = () => {
  //     if (xhr.readyState === 4) {
  //       if (xhr.status === 200) {
  //         const data: WeatherData = JSON.parse(xhr.responseText);
  //         setWeather(data);
  //         setError("");
  //         setHistory((prev) =>
  //           prev.includes(query) ? prev : [query, ...prev]
  //         );
  //       } else {
  //         setWeather(null);
  //         setError("Invalid city or country name.");
  //       }
  //     }
  //   };
  //   xhr.send();
  // };

  const deleteHistory = (query: string) => {
    setHistory((prev) => prev.filter((item) => item !== query));
  };

  return (
    <div>
      {/* <WeatherForm onSearch={searchWeather} /> */}
      <div className="container">
        {weather && <WeatherInfo data={weather} />}
        {history.length > 0 && (
          <SearchHistory
            history={history}
            onSearch={(query) => {
              // const [city, country] = query.split(",");
              // searchWeather(city, country);
            }}
            onDelete={deleteHistory}
          />
        )}
      </div>
    </div>
  );
};

export default App;

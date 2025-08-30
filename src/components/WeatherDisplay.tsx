import { useEffect, useState } from "react";
import axios from "axios";

type cityProps = {
  cityName: string;
};

type weatherType = {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    description: string;
  }[];
};

const WeatherDisplay = ({ cityName }: cityProps) => {
  const [weatherData, setWeatherData] = useState<weatherType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
      )
      .then((response) => {
        setWeatherData(response.data);
        setLoading(false);
        setError("");
      })
      .catch((error) => {
        console.log(error);
        setWeatherData(null);
        setError("something went wrong");
      });
  }, [cityName]);

  return (
    <div>
      {loading && <p className="font-bold">Loading... 🌚</p>}
      {error && <p className="text-red-700 mt-2">{error}</p>}
      {weatherData && weatherData.main && (
        <div className="mt-3  font-bold sm:text-2xl flex flex-col gap-2 border-2 sm:w-90 mx-auto p-2 bg-[#FADA7A]">
          <h2>Weather in {weatherData.name}</h2>
          <p>🌡️ Temperature: {weatherData.main.temp} °C</p>
          <p>💧 Humidity: {weatherData.main.humidity}%</p>
          <p>☁️ Condition: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherDisplay;

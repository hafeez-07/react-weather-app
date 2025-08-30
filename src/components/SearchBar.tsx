import React, { useState } from "react";
import WeatherDisplay from "./WeatherDisplay.tsx";

const SearchBar = () => {
  const [city, setCity] = useState("");
  const [cityName, setCityName] = useState("");

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCityName(city);
  };

  return (
    <div>
      <form>
        <div className="sm:flex  sm:gap-4 flex gap-2">
          <input
            type="text"
            value={city}
            placeholder="Enter your city..."
            onChange={(e) => setCity(e.target.value)}
            className="border rounded-md lg:w-50 flex-4 pl-2"
          ></input>
          <button
            onClick={clickHandler}
            className="bg-green-600 text-white p-1 rounded border flex-1 border-black
            "
          >
            Search
          </button>
        </div>

        {cityName && <WeatherDisplay cityName={cityName}></WeatherDisplay>}
        {/* WeatherDisplay only runs when cityName has some value */}
      </form>
    </div>
  );
};

export default SearchBar;

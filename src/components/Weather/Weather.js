import './Weather.css';
import {useState} from "react";
import {fetchWeatherByCity} from "../../services/weatherService";
import SearchCity from "./SearchCity/SearchCity";
import WeatherResult from "./WeatherResult/WeatherResult";
const Weather = () => {

    const [weather, setWeather] = useState(undefined);

    const onSearch = (weatherData) => {
        setWeather(weatherData);
    }


    return(
        <div>
            <h1>Weather App</h1>
            <SearchCity search={onSearch}></SearchCity>
            {weather && <WeatherResult weather={weather}></WeatherResult>}
        </div>
    );
};

export default Weather;
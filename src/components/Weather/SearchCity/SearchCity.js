import {fetchWeatherByCity} from "../../../services/weatherService";
import {useState} from "react";

const SearchCity = (props) => {
    const [city, setCity] = useState('Beijing');




    const onCityInputChange = (event) => {

        const value = event.target.value;
        setCity(value);
    };

    const onSearchButtonClick = async () => {
        //get weather data with object with Location and Current
        const weatherData = await fetchWeatherByCity(city);
        props.search(weatherData);
    };


    return (
        <div>

            <input type="text" placeholder='Search city...' value={city} onChange={onCityInputChange}/>
            <button onClick={onSearchButtonClick}>Search</button>

        </div>)
}

export default SearchCity;
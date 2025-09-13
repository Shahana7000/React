import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "0e8009ef6cfeca274013d766494778ee";

    let getWeatherInfo = async (city) => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            let result = {
                city : city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather : jsonResponse.weather[0].description,
            }
            console.log(result);
            return result;
        } catch (err) {
            console.error("Error fetching weather:", err);
        }
    };

    let handleChange = (event) => {
        setCity(event.target.value);
    };

    let handleSubmit = async(event) => {
        event.preventDefault();
        console.log(city);
       let newinfo = await getWeatherInfo(city); 
       updateInfo(newinfo)  // ✅ Pass city here
        setCity("");            // reset input after search
    };

    return (
        <div className="SearchBox">
            <form onSubmit={handleSubmit}> 
                <TextField 
                    id="city" 
                    label="City Name" 
                    variant="outlined" 
                    required 
                    value={city} 
                    onChange={handleChange}
                />
                <br /><br />
                <Button 
                    variant="contained" 
                    type="submit"
                >
                    Search
                </Button>
            </form>
        </div>
    );
}

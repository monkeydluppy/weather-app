import { useEffect, useState } from "react";
import "./assets/styles/index.css";
import "./assets/styles/App.css";
import "./App.scss";
import Search from "./components/Search/Search";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api/api.js";
import Forecast from "./components/Foreccast/Forecast.jsx";

function App() {
    const [currentWeather, setCurrentWeather] = useState(null);
    const [forecastWeather, setForecastWeather] = useState(null);
    const handleOnSearchChange = (searchData) => {
        console.log(searchData);
        const [lat, lon] = searchData.value.split(" ");

        console.log(lat, lon);

        // (async () => {
        //     try {
        //         const weather = await fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`);
        //         const response = await weather.json();
        //         setCurrentWeather({ city: searchData.label, ...response });
        //     } catch (error) {
        //         console.log("Error: ", error);
        //     }
        // })();

        // (async () => {
        //     try {
        //         const weather = await fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`);
        //         const response = await weather.json();
        //         setForecastWeather({ city: searchData.label, ...response });
        //     } catch (error) {
        //         console.log("Error: ", error);
        //     }
        // })();

        // *promise all*

        const currentWeatherFetch = fetch(
            `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
        );

        const forecastWeatherFetch = fetch(
            `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
        );

        Promise.all([currentWeatherFetch, forecastWeatherFetch])
            .then(async (response) => {
                const weatherResponse = await response[0].json();
                const forecaseResponse = await response[1].json();

                setCurrentWeather({ city: searchData.label, ...weatherResponse });
                setForecastWeather({ city: searchData.label, ...forecaseResponse });
            })
            .catch((error) => {
                console.log("Error", error);
            });
    };
    console.log(currentWeather);
    console.log(forecastWeather);

    return (
        <>
            <div className="container max-w-contain md:max-w-small lg:max-w-medium xl:max-w-large pb-[200px] sm:pb-[100px] pt-[100px] py-0  px-[0.75rem]">
                <h2 className="heading text-center uppercase mb-5 text-white text-sm">Weather app</h2>
                <Search onSearchChange={handleOnSearchChange}></Search>
                {currentWeather && <CurrentWeather data={currentWeather}></CurrentWeather>}
                {forecastWeather && <Forecast data={forecastWeather}></Forecast>}
            </div>
        </>
    );
}

export default App;

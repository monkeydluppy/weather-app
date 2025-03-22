import React from "react";
import "./CurrentWeather.scss";

const CurrentWeather = ({ data }) => {
    return (
        <div className="weather px-[10px] py-[10px] usm:py-[10px] usm:px-[20px] usm:w-[auto] sm:w-[400px] rounded-[5px] bg-[#333] my-[40px] mx-[auto] text-white hover:scale-[1.01] ">
            <div className="top flex align-center justify-between mb-[10px] ">
                <div className="city-box">
                    <p className="city text-[6vw] usm:text-[4vw] sm:text-[24px] text-white capitalize leading-[130%]">
                        {data.city}
                    </p>
                    <p className="weather-description text-[4.5vw] usm:text-[3vw] sm:text-[18px] text-white capitalize leading-[130%]">
                        {data.weather[0].description}
                    </p>
                </div>
                <div className="icon-box">
                    <img className="w-[12vw] sm:w-[50px]" src={`/icons/${data.weather[0].icon}.png`} alt="" />
                </div>
            </div>
            <div className="bottom flex flex-col sm:flex-row items-start  sm:items-center justify-between gap-[3vw] sm:gap-[40px]">
                <p className="temperature text-[11vw] usm:text-[9vw] sm:text-[50px] text-white w-[100%]  sm:w-[49%]">
                    {data.main.temp}°C
                </p>

                <div className="details w-[100%] sm:w-[49%]">
                    <div className="row flex justify-between">
                        <span className="label">
                            <strong>Details: </strong>
                        </span>
                    </div>
                    <div className="row flex justify-between text-[4.5vw] usm:text-[3vw] sm:text-[16px] mb-[8px] sm:mb-[0px]">
                        <span className="label">Fells like </span>
                        <span className="value">{data.main.feels_like} °C </span>
                    </div>
                    <div className="row flex justify-between text-[4.5vw] usm:text-[3vw] sm:text-[16px] mb-[8px] sm:mb-[0px]">
                        <span className="label">Wind </span>
                        <span className="value">{data.wind.speed} m / s</span>
                    </div>
                    <div className="row flex justify-between text-[4.5vw] usm:text-[3vw] sm:text-[16px] mb-[8px] sm:mb-[0px]">
                        <span className="label">Humidity </span>
                        <span className="value">{data.main.humidity} %</span>
                    </div>
                    <div className="row flex justify-between text-[4.5vw] usm:text-[3vw] sm:text-[16px] mb-[8px] sm:mb-[0px]">
                        <span className="label">Pressure </span>
                        <span className="value">{data.main.pressure} hPa</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurrentWeather;

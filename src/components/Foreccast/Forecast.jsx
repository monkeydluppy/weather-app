import React from "react";
import "./Forecast.scss";
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from "react-accessible-accordion";
import { FaAngleDown } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";

const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const Forecast = ({ data }) => {
    const dayInWeek = new Date().getDay();
    const forecastDays = weekDays.slice(dayInWeek, weekDays.length).concat(weekDays.slice(0, dayInWeek));
    console.log(forecastDays);

    return (
        <div className="forecast-box mt-[20px]">
            <label className="title text-white">
                <strong>Daily</strong>
            </label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, index) => {
                    return (
                        <AccordionItem key={index}>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    <div className="daily-item text-mid usm:text-esm sm:text-default flex flex-col sm:flex-row items-start p-[10px] sm:p[0] sm:items-center gap-[3vw] sm:gap-[30px]">
                                        <img
                                            src={`/icons/${item.weather[0].icon}.png`}
                                            className="weather-icon w-[15vw] sm:w-[50px]"
                                            alt=""
                                        />
                                        <label className="day">{forecastDays[index]} </label>
                                        <label className="description">{item.weather[0].description} </label>
                                        <label className="min-max">
                                            {item.main.temp_min}°C / {item.main.temp_max}°C
                                        </label>
                                    </div>
                                    <div className="icon text-sm usm:text-esm sm:text-default absolute top-[17%] sm:top-[50%] right-[10px] translate-y-[-50%]">
                                        <FaAngleDown className="fa-solid fa-chevron-down icon1"></FaAngleDown>
                                        <FaXmark className="fa-solid fa-chevron-down icon2 absolute top-[0] left-[0]"></FaXmark>
                                    </div>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className="daily-details text-esm absolute top-[105%] left-[0] z-[1] w-[100%]  sm:static sm:text-default  sm:bg-[#333333] border-[1px] border-[#5f5e5e] border-solid bg-[#273334] mb-[20px] px-[15px] py-[10px] rounded-[10px] text-white">
                                    <div className="daily-detail-item flex justify-between mb-[10px]">
                                        <label>Pressure </label>
                                        <label>{item.main.pressure} hPa </label>
                                    </div>
                                    <div className="daily-detail-item flex justify-between mb-[10px] ">
                                        <label>Humidity </label>
                                        <label>{item.main.humidity} % </label>
                                    </div>
                                    <div className="daily-detail-item flex justify-between mb-[10px]">
                                        <label>Clouds </label>
                                        <label>{item.clouds.all} % </label>
                                    </div>
                                    <div className="daily-detail-item flex justify-between mb-[10px]">
                                        <label>Wind Speed </label>
                                        <label>{item.wind.speed} meter / second </label>
                                    </div>
                                    <div className="daily-detail-item flex justify-between mb-[10px]">
                                        <label>Sea Level </label>
                                        <label>{item.main.sea_level} meter</label>
                                    </div>
                                    <div className="daily-detail-item flex justify-between mb-[10px]">
                                        <label>Feels Like </label>
                                        <label>{item.main.feels_like} °C</label>
                                    </div>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                    );
                })}
            </Accordion>
        </div>
    );
};

export default Forecast;

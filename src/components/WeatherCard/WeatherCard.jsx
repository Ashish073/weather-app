import React from "react";
import Icons from "../Icon";
import { getTemp } from "../../utils/commonUtils";
import { useTempScaleContext } from "../../context/TempScaleContext";
import CountToComp from "../CountToComp";

function WeatherCard({ data, size = 140, displayHint = true, displayDetails = true, defaultStyling = true }) {
    const { tempType } = useTempScaleContext();

    return (
        <>
            <div className={`${defaultStyling ? '-mt-3' : 'mb-5'} weather-card-container`}>
                <div className="weather-card-content">
                    <div className="weather-card-temp-content" title={`${getTemp(Math.round(data.main.temp), tempType)}° ${tempType === 'c' ? 'celsius' : 'fahrenheit'}`}>
                        <div className="weather-card-temp-container">
                            <CountToComp maxValue={getTemp(data.main.temp, tempType)} className={`text-[${size}px] temperature`} />
                            <p className={`text-[70px] md:text-[${size}px] -mt-8 temperature`} >°</p>
                        </div>
                        <span className={`${!defaultStyling ? '-ml-5 md:-ml-10  -mt-8' : '-mt-3 lg:text-base mb-5'} weather-card-temp-desc`}>{data.weather[0].description}</span>
                    </div>
                    {
                        displayDetails ?
                            (
                                <div className="weather-card-display-details-container">
                                    <div className="weather-card-detail-content" title={`Wind Speed: ${data.wind.speed} m/s`}>
                                        <Icons name="Wind" className="weather-card-detail-icon" />
                                        <span className="weather-card-detail-val">{data.wind.speed} m/s</span>
                                    </div>
                                    <div className="weather-card-detail-content" title={`Humidity: ${data.main.humidity}%`}>
                                        <Icons name="Droplet" className="weather-card-detail-icon" />
                                        <span className="weather-card-detail-val">{data.main.humidity}%</span>
                                    </div>
                                    <div className="weather-card-detail-content" title={`Pressure: ${data.main.pressure} hPa`}>
                                        <Icons name="GaugeCircle" className="weather-card-detail-icon" />
                                        <span className="weather-card-detail-val">{data.main.pressure} hPa</span>
                                    </div>
                                </div>
                            ) : null
                    }
                </div>
                {
                    displayHint ?
                        (
                            <span className="weather-card-hint">
                                The temperature readings are displayed in {tempType === 'c' ? 'Celsius' : 'Fahrenheit'} scale
                                <span className="text-error">
                                    *
                                </span>
                            </span>
                        ) : null
                }
            </div>
        </>
    );
};

export default WeatherCard;

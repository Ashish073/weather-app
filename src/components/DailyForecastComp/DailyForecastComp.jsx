import React from 'react';
import CountToComp from '../CountToComp';
import { forecastDays } from '../../constants/config';
import { useTempScaleContext } from '../../context/TempScaleContext';
import { getTemp } from '../../utils/commonUtils';

function DailyForecastComp({ weatherInfo, handleSelectedDay, selectedDay }) {
    const { tempType } = useTempScaleContext();


    return (
        <>
            <div className="daily-forcast-container hidden md:flex">
                <h1 className="daily-forcast-title">Daily</h1>
                <div className="daily-forecast-grid">
                    {
                        weatherInfo.forecast?.list?.map((item, idx) => {
                            if (idx < 7) {
                                return (
                                    <div className="daily-forecast-item " key={`weather-${idx}`} role="button" onClick={() => handleSelectedDay(idx)}>
                                        <div className={`daily-forecast-content ${selectedDay === idx && 'active'}`}>
                                            <label className="daily-forecast-content-day">{idx === 0 ? 'Tomorrow' : forecastDays[idx]}</label>
                                            <div className="daily-forecast-content-temp">
                                                <img src={`resources/icons/${item.weather[0].icon}.png`} className={`icon-small ${selectedDay === idx && 'image-white-convert'}`} alt="weather" />
                                                <div className="daily-forecast-content-temp-val">
                                                    <CountToComp className="text-[20px]" maxValue={getTemp(item.main.temp, tempType)} />
                                                    <span className="text-[20px]">°</span>
                                                </div>
                                            </div>
                                            <label className="daily-forecast-content-desc">{item.weather[0].description}</label>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default DailyForecastComp
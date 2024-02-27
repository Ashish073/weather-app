import React from 'react'
import Icons from '../Icon'
import { forecastDays } from '../../constants/config';
import WeatherCard from '../WeatherCard';
import CountToComp from '../CountToComp';
import { getTemp } from '../../utils/commonUtils';
import { useTempScaleContext } from '../../context/TempScaleContext';

function DynamicForecastDetailsComp({ weatherInfo, selectedDay, handleSelectedDay }) {

    const { tempType } = useTempScaleContext();

    function handleChangeDay(type) {
        if (type === "minus") {
            handleSelectedDay(selectedDay - 1);
            return;
        }
        handleSelectedDay(selectedDay + 1);
    }

    return (
        <>
            <div className="dynamic-forecast-container">
                <div className="dynamic-forecast-controls">
                    <button disabled={selectedDay === 0} onClick={() => handleChangeDay('minus')} className="dynamic-forecast-change-back-btn">
                        <Icons name="ChevronLeft" />
                    </button>
                    <h1 className="text-2xl font-bold my-3 w-full text-center">{selectedDay === 0 ? 'Tomorrow' : forecastDays[selectedDay]}</h1>
                    <button disabled={selectedDay === 6} onClick={() => handleChangeDay('plus')} className="dynamic-forecast-change-next-btn">
                        <Icons name="ChevronRight" />
                    </button>
                </div>
                <div>
                    <div>
                        <WeatherCard data={weatherInfo} className="dynamic-temp" displayDetails={false} displayHint={false} />
                    </div>
                    <div className="daily-details-grid">
                        <div className="daily-details-grid-item">
                            <div className='daily-icon-value'>
                                <Icons name="GaugeCircle" className="daily-icon" />
                                <label className='daily-detail-label'>Pressure</label>
                            </div>
                            <label className="daily-value">{weatherInfo?.main.pressure}</label>
                        </div>
                        <div className="daily-details-grid-item">
                            <div className='daily-icon-value'>
                                <Icons name="Droplets" className="daily-icon" />
                                <label className='daily-detail-label'>Humidity</label>
                            </div>
                            <label className="daily-value">{weatherInfo?.main.humidity}</label>
                        </div>
                        <div className="daily-details-grid-item">
                            <div className='daily-icon-value'>
                                <Icons name="Cloud" className="daily-icon" />
                                <label className='daily-detail-label'>Clouds</label>
                            </div>
                            <label className="daily-value">{weatherInfo?.clouds.all}
                                <span>
                                    %
                                </span>
                            </label>
                        </div>
                        <div className="daily-details-grid-item">
                            <div className='daily-icon-value'>
                                <Icons name="Wind" className="daily-icon" />
                                <label className='daily-detail-label'>Wind speed</label>
                            </div>
                            <label className="daily-value">{weatherInfo?.wind.speed}

                                <span>
                                    m/s
                                </span>
                            </label>
                        </div>
                        <div className="daily-details-grid-item">
                            <div className='daily-icon-value'>
                                <Icons name="Waves" className="daily-icon" />
                                <label className='daily-detail-label'>Sea level</label>
                            </div>
                            <label className="daily-value">{weatherInfo?.main.pressure}
                                <span>
                                    m
                                </span>
                            </label>
                        </div>
                        <div className="daily-details-grid-item">
                            <div className='daily-icon-value'>
                                <Icons name="Thermometer" className="daily-icon" />
                                <label className='daily-detail-label'>Feels like</label>
                            </div>
                            <div className="daily-details-item-feels-like">
                                <CountToComp maxValue={getTemp(weatherInfo.main.feels_like, tempType)} className="text-3xl" />
                                °
                            </div>
                        </div>
                    </div>
                </div>
            </div></>
    )
}

export default DynamicForecastDetailsComp
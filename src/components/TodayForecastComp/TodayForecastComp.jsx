import React from 'react';
import Icons from '../Icon';
import CountToComp from '../CountToComp';
import { useTempScaleContext } from '../../context/TempScaleContext';
import { getTemp } from '../../utils/commonUtils';

function TodayForecastComp({ weatherInfo }) {
    const { tempType } = useTempScaleContext();
    return (
        <>
            <div className="today-forecast-container">
                <h1 className="today-forecast-title">Today</h1>
                <div className="daily-details-grid text-white">
                    <div className="daily-details-grid-item">
                        <div className='daily-icon-value'>
                            <Icons name="GaugeCircle" className="daily-icon" />
                            <label className='daily-detail-label'>Pressure</label>
                        </div>
                        <label className="daily-value">{weatherInfo?.currentWeather?.main.pressure}</label>
                    </div>
                    <div className="daily-details-grid-item">
                        <div className='daily-icon-value'>
                            <Icons name="Droplets" className="daily-icon" />
                            <label className='daily-detail-label'>Humidity</label>
                        </div>
                        <label className="daily-value">{weatherInfo?.currentWeather?.main.humidity}</label>
                    </div>
                    <div className="daily-details-grid-item">
                        <div className='daily-icon-value'>
                            <Icons name="Cloud" className="daily-icon" />
                            <label className='daily-detail-label'>Clouds</label>
                        </div>
                        <label className="daily-value">{weatherInfo?.currentWeather?.clouds.all}
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
                        <label className="daily-value">{weatherInfo?.currentWeather?.wind.speed}

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
                        <label className="daily-value">{weatherInfo?.currentWeather?.main.pressure}
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
                            <CountToComp maxValue={getTemp(weatherInfo.currentWeather.main.feels_like, tempType)} className="text-3xl" />
                            °
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TodayForecastComp
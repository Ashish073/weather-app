import React, { useEffect, useState } from 'react'
import WeatherCard from '../../components/WeatherCard';
import HourlyForecast from '../../components/HourlyForecast/HourlyForecast';
import { getLocalTime } from '../../utils/commonUtils';
import Icons from '../../components/Icon';
import { useCityContext } from '../../context/CityContext';
import { useWeatherContext } from '../../context/WeatherContext';
import { useProgressContext } from '../../context/ProgressContext';
import WeatherSkeleton from '../../components/Loaders/WeatherSkeleton';
import TodayForecastComp from '../../components/TodayForecastComp';
import DynamicForecastDetailsComp from '../../components/DynamicForecastDetailsComp';
import DailyForecastComp from '../../components/DailyForecastComp';

function LandingPage() {
  const { city } = useCityContext();
  const { weatherInfo } = useWeatherContext();
  const { processing } = useProgressContext();

  const [selectedDay, setSelectedDay] = useState(0);

  function handleSelectedDay(idx) {
    setSelectedDay(idx)
  }

  useEffect(() => {
    setSelectedDay(0);
  }, [city]);

  if (processing) {
    return <WeatherSkeleton />
  }

  if (Object.keys(weatherInfo).length) {
    return (
      <div className="landing-page-container">
        <div className="landing-page-content">
          <div className="landing-page-content-span-1">
            {
              city ?
                (
                  <div className="landing-page-content-span-1-content">
                    <span className="landing-page-content-span-1-content-location ">
                      <Icons name="MapPin" className="text-purple-600 mr-1" /> {city}
                    </span>
                    <div className="landing-page-content-span-1-content-time">
                      {getLocalTime(new Date((weatherInfo.currentWeather.dt + weatherInfo.currentWeather.timezone) * 1000))}
                    </div>
                  </div>
                ) : null
            }
            <div className="mb-10">
              {weatherInfo.currentWeather && <WeatherCard data={weatherInfo.currentWeather} defaultStyling={false} />}
            </div>
            <div>
              <HourlyForecast data={weatherInfo?.hourlyForecast?.hourly} />
            </div>
            {
              weatherInfo.forecast?.list.length ?
                (
                  <DailyForecastComp weatherInfo={weatherInfo} handleSelectedDay={handleSelectedDay} selectedDay={selectedDay} />
                ) : null
            }
          </div>
          <div className="landing-page-content-span-2">
            <TodayForecastComp weatherInfo={weatherInfo} />
            <DynamicForecastDetailsComp weatherInfo={weatherInfo.forecast.list[selectedDay]} selectedDay={selectedDay} handleSelectedDay={handleSelectedDay} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="landing-page-initial">
        <h1>Please search a city to check the weather.</h1>
      </div>
    </>
  )

}

export default LandingPage
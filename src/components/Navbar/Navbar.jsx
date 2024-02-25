import React from 'react';
import AutoCompleteTextField from '../AutoCompleteTextField';
import { useWeatherContext } from '../../context/WeatherContext';
import { useCityContext } from '../../context/CityContext';
import { useTempScaleContext } from '../../context/TempScaleContext';
import { useProgressContext } from '../../context/ProgressContext';

function Navbar() {
    const weather_api_url = import.meta.env.VITE_WEATHER_API_URL;
    const weather_api_key = import.meta.env.VITE_WEATHER_API_KEY;

    const { setWeatherContext } = useWeatherContext();
    const { tempType, toggleTemp } = useTempScaleContext();
    const { setCityContext } = useCityContext();
    const { setProcessContext } = useProgressContext();

    async function handleOnSearchChange(searchData) {
        const [lat, lon] = searchData.value.split(" ");
        try {
            setProcessContext(true);
            const currentWeatherFetch = fetch(
                `${weather_api_url}/weather?lat=${lat}&lon=${lon}&appid=${weather_api_key}&units=metric`
            );
            const forecastFetch = fetch(
                `${weather_api_url}/forecast?lat=${lat}&lon=${lon}&appid=${weather_api_key}&units=metric`
            );

            const hourlyForecastFetch = fetch(
                `${weather_api_url}/onecall?lat=${lat}&lon=${lon}&appid=${weather_api_key}&units=metric`
            );

            const response = await Promise.all([currentWeatherFetch, forecastFetch, hourlyForecastFetch])
            const weatherResponse = await response[0].json();
            const forcastResponse = await response[1].json();
            const hourlyForcastResponse = await response[2].json();
            setCityContext(searchData.label);
            setWeatherContext({ currentWeather: weatherResponse, forecast: forcastResponse, hourlyForecast: hourlyForcastResponse });
        } catch (error) {

        } finally {
            setProcessContext(false);

        }
    };

    function handleTempToggle(val) {
        toggleTemp(val)
    }

    return (
        <nav className="flex flex-col justify-center items-start w-full rounded-2xl px-1 mb-3 lg:mb-0">
            <div className="flex flex-col-reverse lg:flex-row justify-between items-start w-full mb-3">
                <div className="flex justify-center items-center w-full lg:w-auto">
                    <div className="w-full lg:w-[300px]">
                        <AutoCompleteTextField onSearchChange={handleOnSearchChange} />
                    </div>
                    <button title="Toggle (Celcius/Farenheit)" className={`ml-3 px-3 relative font-semibold transition-all shadow-around ${tempType === 'c' ? 'bg-purple-400 border border-purple-300' : 'border border-pink-300 bg-pink-400 '} text-white rounded-full w-[40px] h-[40px]`} onClick={() => handleTempToggle('c')}>
                        <div className='flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                            <span>
                                {tempType === 'c' ? 'C' : 'F'}
                            </span>
                            <span className="-mt-1">°</span>
                        </div>
                    </button>
                </div>
                <p className="mb-3 lg:mb-0 text-[50px] md:text-4xl font-bold uppercase bg-gradient-to-r from-purple-500  via-violet-500 to-pink-500 bg-clip-text text-transparent">
                    Weather App
                </p>
            </div>
        </nav >
    )
}

export default Navbar
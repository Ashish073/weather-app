import React, { createContext, useContext, useState } from 'react';

export const WeatherContext = createContext();

function WeatherContextProvider({ children }) {
    const [weatherInfo, setWeatherInfo] = useState({});
    const [dayWeatherInfo, setDayWeatherInfo] = useState({});

    function setWeatherContext(val) {
        setWeatherInfo(val);
    }

    function setDayWeatherInfoContext() {
        setDayWeatherInfo(val)
    }

    return (
        <WeatherContext.Provider value={{ weatherInfo, setWeatherContext, dayWeatherInfo, setDayWeatherInfoContext }}>
            {children}
        </WeatherContext.Provider>
    );
};

export const useWeatherContext = () => useContext(WeatherContext);

export default WeatherContextProvider;

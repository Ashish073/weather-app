import React, { createContext, useContext, useState } from 'react';

export const CityContext = createContext();

function CityContextProvider({ children }) {
    const [city, setCity] = useState('');

    function setCityContext(val) {
        setCity(val);
    }

    return (
        <CityContext.Provider value={{ city, setCityContext }}>
            {children}
        </CityContext.Provider>
    );
};

export const useCityContext = () => useContext(CityContext);

export default CityContextProvider;

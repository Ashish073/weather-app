import React, { createContext, useContext, useState } from 'react';

export const TempScaleContext = createContext();

function TempContextProvider({ children }) {

    const [tempType, setTempType] = useState('c');

    function toggleTemp() {
        let temType = tempType;
        if (temType === 'c') {
            temType = 'f';
        } else {
            temType = 'c';
        }
        setTempType(temType);
    }

    return (
        <TempScaleContext.Provider value={{ tempType, toggleTemp }}>
            {children}
        </TempScaleContext.Provider>
    );
};

export const useTempScaleContext = () => useContext(TempScaleContext);

export default TempContextProvider;

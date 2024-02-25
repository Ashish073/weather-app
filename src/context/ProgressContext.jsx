import React, { createContext, useContext, useState } from 'react';

export const ProgressContext = createContext();

function ProgressContextProvider({ children }) {
    const [processing, setProcessing] = useState(false);

    function setProcessContext(val) {
        setProcessing(val);
    }

    return (
        <ProgressContext.Provider value={{ processing, setProcessContext }}>
            {children}
        </ProgressContext.Provider>
    );
};

export const useProgressContext = () => useContext(ProgressContext);

export default ProgressContextProvider;

import React, { useState, useEffect } from 'react';
import { useCityContext } from '../../context/CityContext';
import { useTempScaleContext } from '../../context/TempScaleContext';

function CountToComp({ maxValue, className, speed = 50 }) {
    const [count, setCount] = useState(0);

    console.log(maxValue);

    const { city } = useCityContext();
    const { tempType } = useTempScaleContext()

    useEffect(() => {
        let currentCount = 0;

        const intervalId = setInterval(() => {
            if (currentCount <= maxValue) {
                setCount(currentCount);
                currentCount += 1;
            } else {
                setCount(maxValue.toFixed(1));
                clearInterval(intervalId);
            }
        }, tempType === 'f' ? 10 : speed);

        return () => clearInterval(intervalId);
    }, [maxValue, speed]);

    useEffect(() => {
        if (count === maxValue) {
            setCount(0);
        }
    }, [city, tempType]);

    return <span className={className}>{count}</span>;
}

export default CountToComp;

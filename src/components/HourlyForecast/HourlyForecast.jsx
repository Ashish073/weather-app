import React, { useRef, useState, useEffect } from "react";
import { getTemp } from "../../utils/commonUtils";
import { formattedTime } from "../../utils/commonUtils";
import { useTempScaleContext } from "../../context/TempScaleContext";
import CountToComp from "../CountToComp";

const HourlyForecast = ({ data }) => {
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const ulRef = useRef(null);
    const { tempType } = useTempScaleContext();

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - ulRef.current.offsetLeft);
        setScrollLeft(ulRef.current.scrollLeft);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const x = e.pageX - ulRef.current.offsetLeft;
        const walk = (x - startX) * 4;
        ulRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleTouchStart = (e) => {
        setIsDragging(true);
        setStartX(e.touches[0].pageX - ulRef.current.offsetLeft);
        setScrollLeft(ulRef.current.scrollLeft);
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;
        const x = e.touches[0].pageX - ulRef.current.offsetLeft;
        const walk = (x - startX) * 4;
        ulRef.current.scrollLeft = scrollLeft - walk;
        e.preventDefault();
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
    };

    useEffect(() => {
        const ulElement = ulRef.current;
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
        ulElement.addEventListener("touchstart", handleTouchStart, { passive: false });
        ulElement.addEventListener("touchmove", handleTouchMove, { passive: false });
        ulElement.addEventListener("touchend", handleTouchEnd);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
            ulElement.removeEventListener("touchstart", handleTouchStart);
            ulElement.removeEventListener("touchmove", handleTouchMove);
            ulElement.removeEventListener("touchend", handleTouchEnd);
        };
    }, [isDragging, startX, scrollLeft]);

    return (
        <div className="flex px-3.5 mb-3">
            <ul
                title="Drag to scroll"
                ref={ulRef}
                className="hourly-temps"
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseUp}
                onMouseUp={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                {data?.map((hourData, idx) => (
                    <li key={hourData.dt} className={`hourly-temp-item p-3 ${idx === data.length - 1 ? 'mr-0' : 'mr-2'}  border-2 rounded-xl`}>
                        <div className="hourly-temp-item-content">
                            <span className="hourly-temp-item-content-val">
                                <CountToComp maxValue={getTemp(Math.round(hourData.temp), tempType)} />
                                °
                            </span>
                            <span className="hourly-temp-item-content-time">{formattedTime(hourData.dt)}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HourlyForecast;

import React from 'react';
import Icons from '../Icon';

function WeatherCardSkeleton() {
    return (
        <>
            <div className="weather-card-container">
                <div className="weather-card-content">
                    <div className="skeleton-loader weather-card-temp-content rounded-xl">
                        <div className="weather-card-temp-container">
                            <span className="">
                                <span className="temperature text-[140px] opacity-0">LO</span>
                            </span>
                        </div>
                        <span className="weather-card-temp-desc">
                            <span className="opacity-0">
                                loading loading loading
                            </span>
                        </span>
                    </div>
                    <div className="weather-card-display-details-container">
                        <div className="weather-card-detail-content skeleton-loader rounded-lg">
                            <span className='opacity-0'>
                                loading
                            </span>
                            <span className="opacity-0">
                                loading
                                loading
                            </span>
                        </div>
                        <div className="weather-card-detail-content skeleton-loader rounded-lg">
                            <span className='opacity-0'>
                                loading
                            </span>
                            <span className="opacity-0">
                                loading
                                loading
                            </span>
                        </div>
                        <div className="weather-card-detail-content skeleton-loader rounded-lg">
                            <span className='opacity-0'>
                                loading
                            </span>
                            <span className="opacity-0">
                                loading
                                loading
                            </span>
                        </div>
                    </div>
                </div>
                <span className="skeleton-loader rounded-2xl">
                    <span className="opacity-0">
                        Loading Loading Loading Loading Loading Loading
                        <span className="text-red-500">
                            *
                        </span>
                    </span>
                </span>
            </div>
        </>
    )
}

export default WeatherCardSkeleton
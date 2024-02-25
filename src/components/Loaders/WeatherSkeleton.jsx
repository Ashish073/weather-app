import React from 'react'
import WeatherCardSkeleton from './WeatherCardSkeleton'
import HourlyForecastSkeleton from './HourlyForecastSkeleton'
import Icons from '../Icon'

function WeatherSkeleton() {
    return (
        <div>
            <div className="landing-page-container">
                <div className="landing-page-content">
                    <div className="landing-page-content-span-1">
                        <div className="landing-page-content-span-1-content">
                            <span className="skeleton-loader landing-page-content-span-1-content-location rounded-lg">
                                <span className="opacity-0">
                                    loading loading loading
                                </span>
                            </span>
                            <span className='skeleton-loader landing-page-content-span-1-content-time rounded-lg'>
                                <span className="opacity-0">
                                    loading loading loading
                                </span>
                            </span>
                        </div>
                        <div className="mb-10">
                            <WeatherCardSkeleton />
                        </div>
                        <div>
                            <HourlyForecastSkeleton />
                        </div>
                        <div className="flex-wrap flex justify-start items-center mx-2.5">
                            <h1 className="text-2xl font-semibold mb-3 skeleton-loader rounded-xl">
                                <span className="opacity-0">
                                    loading
                                </span>
                            </h1>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 mb-5 gap-4 xl:gap-4 w-full">
                                {
                                    Array.from({ length: 7 }).map((_, idx) => (
                                        <div className="skeleton-loader rounded-lg w-full cursor-pointer" key={`weather-loading-${idx}`}>
                                            <div className="flex justify-start items-center flex-col border-2 rounded-xl p-2 h-full w-full">
                                                <label className="font-semibold text-lg mb-3">
                                                    <span className="opacity-0">
                                                        Loading
                                                    </span>
                                                </label>
                                                <div className="flex justify-center items-center flex-col mb-1">
                                                    <div className="flex justify-center items-center">
                                                        <span className="opacity-0">
                                                            Loading
                                                        </span>
                                                    </div>
                                                </div>
                                                <label className="text-neutral-400 capitalize text-center">
                                                    <span className="opacity-0">
                                                        loading loading
                                                    </span>
                                                </label>
                                            </div>
                                        </div>))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="landing-page-content-span-2">
                        <h1 className="skeleton-loader rounded-lg text-2xl font-bold mb-3 max-w-max">
                            <span className="opacity-0">
                                Loading
                            </span>
                        </h1>
                        <div>
                            <div className="daily-details-grid">
                                <div className="daily-details-grid-item skeleton-loader">
                                    <div className='daily-icon-value opacity-0'>
                                        <Icons name="GaugeCircle" className="daily-icon" />
                                        <label className='daily-detail-label'>loading</label>
                                    </div>
                                    <label className="daily-value opacity-0">loading</label>
                                </div>
                                <div className="daily-details-grid-item skeleton-loader">
                                    <div className='daily-icon-value opacity-0'>
                                        <Icons name="Droplets" className="daily-icon" />
                                        <label className='daily-detail-label'>loading</label>
                                    </div>
                                    <label className="daily-value opacity-0">loading</label>
                                </div>
                                <div className="daily-details-grid-item skeleton-loader">
                                    <div className='daily-icon-value opacity-0'>
                                        <Icons name="Cloud" className="daily-icon" />
                                        <label className='daily-detail-label'>Clouds</label>
                                    </div>
                                    <label className="daily-value opacity-0">loading</label>
                                </div>
                                <div className="daily-details-grid-item skeleton-loader">
                                    <div className='daily-icon-value opacity-0'>
                                        <Icons name="Wind" className="daily-icon" />
                                        <label className='daily-detail-label'>loading</label>
                                    </div>
                                    <label className="daily-value opacity-0">loading</label>
                                </div>
                                <div className="daily-details-grid-item skeleton-loader">
                                    <div className='daily-icon-value opacity-0'>
                                        <Icons name="Waves" className="daily-icon" />
                                        <label className='daily-detail-label'>loading</label>
                                    </div>
                                    <label className="daily-value opacity-0">loading</label>
                                </div>
                                <div className="daily-details-grid-item skeleton-loader">
                                    <div className='daily-icon-value opacity-0'>
                                        <Icons name="Thermometer" className="daily-icon" />
                                        <label className='daily-detail-label'>loading</label>
                                    </div>
                                    <label className="daily-value opacity-0">loading</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherSkeleton

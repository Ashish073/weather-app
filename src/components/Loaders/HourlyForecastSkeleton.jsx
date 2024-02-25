import React from 'react'

function HourlyForecastSkeleton() {
    return (
        <div className="flex px-3.5 mb-3">
            <ul
                className="hourly-temps"
            >
                {Array.from({ length: 8 })?.map((_, idx) => (
                    <li key={`loading-${idx}`} className={`p-3 skeleton-loader ${idx === Array.from({ length: 8 }).length - 1 ? 'mr-0' : 'mr-2'}  border-2 rounded-xl`}>
                        <div className="hourly-temp-item-content">
                            <span className="hourly-temp-item-content-val">
                                <span className="opacity-0">
                                    Loading
                                </span>
                            </span>
                            <span className="hourly-temp-item-content-time">
                                <span className="opacity-0">
                                    loading
                                </span>
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default HourlyForecastSkeleton
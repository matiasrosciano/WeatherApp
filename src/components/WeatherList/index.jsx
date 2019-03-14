import React from 'react'
import WeatherLocation from './../WeatherLocation';

const WeatherList = (props) => (
    <ul className="WeatherList">
        {
            props.weathers.map(weather => (
                <WeatherLocation city={weather.city} data={weather.data}/>
            ))
        }
    </ul>
)

export default WeatherList
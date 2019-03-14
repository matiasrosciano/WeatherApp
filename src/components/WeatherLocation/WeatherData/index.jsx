import React from 'react'
import WeatherTemperature from './WeatherTemperature'
import WeatherExtraInfo from './WeatherExtraInfo'
import './styles.css'


const WeatherData = (props) => (
    <div className="weatherDataCont">
        <WeatherTemperature
            temp={props.data.temp}
            state={props.data.state}
        />
        <WeatherExtraInfo
            humidity={props.data.humidity}
            wind={props.data.wind}
        />
    </div>
)


export default WeatherData
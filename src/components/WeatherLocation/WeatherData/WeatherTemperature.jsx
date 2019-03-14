import React from 'react'
import WeatherIcons from 'react-weathericons'
import PropTypes from 'prop-types'

const icons = {
    cloud: 'cloud',
    sun: 'day-sunny',
    rain: 'rain',
    snow: 'snow',
    thunder: "thunderstorm",
    drizzle: "day-storm-showers",
}

const GetIcon = (weatherstate) => {
    const icon = icons[weatherstate]
    if (icon){
        return  <WeatherIcons className="wicon" name={icon} size="3x"/>
    }else
    { 
        return  <WeatherIcons className="wicon" name="horizon-alt" size="3x" />
    }
}

const WeatherTemperature = (props) => (
    <div className="weatherTempCont">
        {GetIcon(props.state)}
       
        <span className="temp">{`${props.temp} `}</span>
        <span className="temptype">Cº</span>
    </div>
)

WeatherTemperature.propTypes = {
    temp: PropTypes.number.isRequired,
    state: PropTypes.string.isRequired,
}

export default WeatherTemperature
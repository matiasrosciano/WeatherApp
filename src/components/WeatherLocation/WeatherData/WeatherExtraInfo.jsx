import React from 'react'
import PropTypes from 'prop-types'

const WeatherExtraInfo = (props) => (
    <div className="weatherExtraInfoCont">
        <span className="extrainfotext">{`Humedad: ${props.humidity}% `}</span>
        <span className="extrainfotext">{`Viento: ${props.wind}`}</span>
    </div>
)

WeatherExtraInfo.propsTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
}

export default WeatherExtraInfo
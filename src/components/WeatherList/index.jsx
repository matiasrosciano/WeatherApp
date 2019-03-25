import React from 'react'
import WeatherLocation from './../WeatherLocation';

const WeatherList = (props) => {

    const handleOnSelectLocationInList = (city) => {
        props.SelectInList(city)
        //handleOnListclick(city)
    }

    return(
         <ul className="WeatherList">
            {
                props.weathers.map( (weather) => (
                    <WeatherLocation city={weather.city} key={weather.city} handleOnClick={handleOnSelectLocationInList}/>
                ))
            }
        </ul>
    )
} 

export default WeatherList
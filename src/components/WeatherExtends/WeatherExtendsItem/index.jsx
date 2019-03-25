import React from 'react'
import WeatherData from './../../WeatherLocation/WeatherData'




const WeatherExtendsItem = (props) => ( 
    <div>
        <h2>
            {props.Day}
            
        </h2>
        <WeatherData data={props.data}/>
    </div>
)

export default WeatherExtendsItem
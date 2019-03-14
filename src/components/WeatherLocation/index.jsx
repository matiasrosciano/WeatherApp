import React  from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import Location from './Location'
import WeatherData from './WeatherData'
import './styles.css'



/*const data ={
    temp : 25,
    state: "cloudy",
    humidity: 90,
    wind: '40 m/s',
}*/
const WeatherLocation = (props) => {
    return (
            <div className="weatherlocationcont">
                {
                    props.city
                ? (
                    <span>
                        <Location city={props.city}/>
                        <WeatherData data={props.data}/>                         
                    </span>
                )
                : (
                   <CircularProgress/>
                )
                }
                                                                      
            </div>  
        )
}

export default WeatherLocation
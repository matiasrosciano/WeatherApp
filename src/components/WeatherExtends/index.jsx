import React, { Component } from 'react'
import WeatherExtendsItem from './WeatherExtendsItem'
import transformForecast from './../../Services/transformForecast'


const apikey = 'c4e129d9f1e248039cbfcfbe79abb274'
const url_base_weather = 'http://api.openweathermap.org/data/2.5/forecast'


class WeatherExtends extends Component{
    constructor(props){
        super(props)

        this.state = { WeatherExtends: null }
    }

    componentDidMount(){
        this.updateCity(this.props.city)
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.city !== this.props.city){
            this.updateCity(nextProps.city)
        }
    }

    updateCity = city => {
        const url_forecast = `${url_base_weather}?q=${city}&appid=${apikey}`
        fetch(url_forecast).then( resolve =>{
            return resolve.json()
        }).then( data => {
            
            const filterforecast = transformForecast(data)
            this.setState({
                WeatherExtends: filterforecast
            })
        })
    }


    render(){
        return(
            <div>
                <h2>  Tiempo extendido {this.props.city} </h2>
                {
                    this.state.WeatherExtends &&
                        this.state.WeatherExtends.map( forecast =>
                        <WeatherExtendsItem Day={forecast.Day} data={forecast.data} key={`${forecast.Day}${this.props.city}`}/>
                )
                }
                
            </div>
        )
    }
}

export default WeatherExtends
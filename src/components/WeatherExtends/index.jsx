import React, { Component } from 'react'

class WeatherExtends extends Component{
    render(){
        return(
            <div>Tiempo extendido {this.props.city}</div>
        )
    }
}

export default WeatherExtends
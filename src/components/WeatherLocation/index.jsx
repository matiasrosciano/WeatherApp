import React, { Component }  from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import Location from './Location'
import WeatherData from './WeatherData'
import transFormWeather from './../../Services/transFormWeather'
import './styles.css'


const apikey = 'c4e129d9f1e248039cbfcfbe79abb274'
const url_base_weather = 'http://api.openweathermap.org/data/2.5/weather'


class WeatherLocation extends Component{
    constructor(props){
        super(props)
        this.state={
            city: props.city,
            data: null
        }
    }

    handleOnMeClick = () => {
        this.props.handleOnClick(this.state.city)
    }

    componentDidMount() {
        this.updateWeather(this.props.city)
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.city !== this.props.city){
            this.setState({
                city: '',
                data: null
            })
            this.updateWeather(nextProps.city)
        }
    }

    updateWeather = city => {
        const api_weather = `${url_base_weather}?q=${city}&appid=${apikey}`
        fetch(api_weather).then( resolve => {
            if (resolve.status === 200){
                return resolve.json()
            }else{
                alert(`No se encuentra la ciudad ${this.state.city}`)
                this.props.OnErrorCity()
            }
        }).then( data => {
            const newWeather = transFormWeather(data)
              
            this.setState({
                city: `${data.name}, ${data.sys.country}`,
                data: newWeather,
            })
        }).catch(error => {
            console.log(error)
        })
    }
    
    render(){
        return (
                <div className="weatherlocationcont" onClick={this.handleOnMeClick}>
                    {
                        this.state.data && this.state.city
                    ? (
                        <span>
                            <Location city={this.state.city}/>
                            <WeatherData data={this.state.data}/>                         
                        </span>
                    )
                    : (
                        <CircularProgress/>
                        )
                    }
                    
                    </div>  
                    )
    }
}

export default WeatherLocation
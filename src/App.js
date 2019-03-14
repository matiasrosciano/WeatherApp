import React, { Component } from 'react';
import WeatherLocation from './components/WeatherLocation';
import WeatherList from './components/WeatherList';
import transFormWeather from './Services/transFormWeather'
import './App.css';

const apikey = 'c4e129d9f1e248039cbfcfbe79abb274'
const url_base_weather = 'http://api.openweathermap.org/data/2.5/weather'

class App extends Component {
  constructor(){
    super()
    this.state = {
      city: "",
      data: null,
      weathers: []
    }
  }

  handleUpdateClick = () => {
    this.setState({
        city: "",
        data: null,
    })
    let location = document.getElementById('searchlocation').value
    const api_weather = `${url_base_weather}?q=${location}&appid=${apikey}`
    fetch(api_weather).then( resolve => {
        if (resolve.status === 200){
            return resolve.json()
        }else{
            alert(`No se encuentra la ciudad ${location}`)
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
    handleAddWeather = () =>{
      let newWeather = {
        city: this.state.city,
        data: this.state.data
      }
      this.setState({
        weathers: this.state.weathers.concat([newWeather])
      })
    }

  render() {
    return (
      <div className="App">
          <h1>Weather App</h1>
            <div className="NewWeather">
              <div className="SearchCityCont">
                <input className="TextLocation" type="text" placeholder="Buscar ciudad" id="searchlocation"/>
                <button className="SearchButton" onClick={this.handleUpdateClick}>Buscar</button>
              </div>
              <WeatherLocation city={this.state.city} data={this.state.data}/>           
              <button className="AddWeatherBtn" onClick={this.handleAddWeather}>Agregar a la lista</button>          
            </div>
            <div className="WeatherList">
              <WeatherList weathers={this.state.weathers}/>
            </div>
      </div>
    );
  }
}

export default App;

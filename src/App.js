import React, { Component } from 'react';
import WeatherLocation from './components/WeatherLocation';
import WeatherList from './components/WeatherList';

import './App.css';


class App extends Component {
  constructor(){
    super()
    this.state = {
      city: "",
      weathers: [],
      SearchBtn: false
    }
  }

  handleOnSearchCity = () =>{
    let location = document.getElementById('searchlocation').value
    this.setState({
      city: location,
      SearchBtn: true
    })
  }
  
  handleAddWeather = () =>{
      let newWeather = {
        city: this.state.city,
        data: this.state.data
      }
      this.setState({
        weathers: this.state.weathers.concat([newWeather]),
        SearchBtn: false
      })
  }

  render() {
    return (
      <div className="App">
          <h1>Weather App</h1>
            <div className="NewWeather">
              <div className="SearchCityCont">
                <input className="TextLocation" type="text" placeholder="Buscar ciudad" id="searchlocation"/>
                <button className="SearchButton" onClick={this.handleOnSearchCity}>Buscar</button>
              </div>
              {
                this.state.SearchBtn
                ?( <span>
                    <WeatherLocation city={this.state.city} data={this.state.data}/>           
                    <button className="AddWeatherBtn" onClick={this.handleAddWeather}>Agregar a la lista</button>   
                  </span>
                )
                :
                (
                  <span></span>
                )
              }
                     
            </div>
            <div className="WeatherList">
              <WeatherList weathers={this.state.weathers}/>
            </div>
      </div>
    );
  }
}

export default App;

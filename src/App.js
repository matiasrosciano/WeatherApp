import React, { Component } from 'react';
import WeatherLocation from './components/WeatherLocation';
import WeatherList from './components/WeatherList';
import WeatherExtends from './components/WeatherExtends'
import { Grid, Row, Col } from 'react-flexbox-grid'

import './App.css';


class App extends Component {
  constructor(){
    super()
    this.state = {
      city: "",
      weathers: [],
      SearchBtn: false,
      cityextendsweather: ''
    }
  }

  handleOnSearchError = () => {

    console.log("handleonSearchError")
    this.setState({
      city: "",
      SearchBtn: false
    })
  }

  handleOnSearchCity = () =>{
    let location = document.getElementById('searchlocation').value
    this.setState({
      city: location,
      SearchBtn: true
    })
    document.getElementById('searchlocation').value = ''
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

  handleOnSelectLocation = (city) => {
    console.log(`handleOnSelectLocation ${city}`)
    this.setState({
      cityextendsweather: city
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Weather App</h1>
        <Grid fluid>
          <Row>
            <Col xs={12} sm={6} md={4}>
              <div className="NewWeather">
                <div className="SearchCityCont">
                  <input className="TextLocation" type="text" placeholder="Buscar ciudad" id="searchlocation"/>
                  <button className="SearchButton" onClick={this.handleOnSearchCity}>Buscar</button>
                </div>
                {
                  this.state.SearchBtn
                  ?( <span>
                      <WeatherLocation city={this.state.city} data={this.state.data} OnErrorCity={this.handleOnSearchError} handleOnClick={this.handleOnSelectLocation}/>           
                      <button className="AddWeatherBtn" onClick={this.handleAddWeather}>Agregar a la lista</button>   
                    </span>
                  )
                  :
                  (
                    <span></span>
                  )
                }
                      
              </div>
            
            </Col>
            <Col xs={12} sm={6} md={4}>
              <div className="WeatherList">
                <WeatherList weathers={this.state.weathers} SelectInList={this.handleOnSelectLocation}/>
              </div>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <WeatherExtends city={this.state.cityextendesweather}/>
            </Col>
          </Row>              
        </Grid>
      </div>
        
    )
  }
}

export default App;

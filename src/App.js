import React, { Component } from 'react';
import WeatherList from './components/WeatherList';
import WeatherExtends from './components/WeatherExtends'
import { Grid, Row, Col } from 'react-flexbox-grid'
import './App.css';
import SearchWeather from './components/SearchWeather';


class App extends Component {
  constructor(){
    super()
    this.state = {
      weathers: [],
      cityextendsweather: ''
    }
  }

  
  handleAddWeather = (city) =>{
    console.log(city)
    let NewWeather = {
      city
    }
    this.setState({
      weathers: [...this.state.weathers,NewWeather]
    })
  }

  handleOnSelectLocation = (city) => {
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
              <SearchWeather handleAddWeather={this.handleAddWeather} handleonasd={this.handleOnSelectLocation}/>            
            </Col>
            <Col xs={12} sm={6} md={4}>
              <div className="WeatherList">
                { this.state.weathers &&
                  <WeatherList weathers={this.state.weathers} SelectInList={this.handleOnSelectLocation}/>
                }            
              </div>
            </Col>
            <Col xs={12} sm={6} md={4}>
              {
                this.state.cityextendsweather &&
                <WeatherExtends city={this.state.cityextendsweather}/>
              }
            </Col>
          </Row>              
        </Grid>
      </div>
        
    )
  }
}


export default App;

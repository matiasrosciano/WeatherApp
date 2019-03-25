import React, { Component } from 'react';
import WeatherListContainer from './containers/WeatherListContainer'
import WeatherExtendsContainer from './containers/WeatherExtendsContainer'
import SearchWeatherContainer from './containers/SearchWeatherContainer'
import { Grid, Row, Col } from 'react-flexbox-grid'
import './App.css';




class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Weather App</h1>
        <Grid fluid>
          <Row>
            <Col xs={12} sm={6} md={4}>
              <SearchWeatherContainer />      
            </Col>
            <Col xs={12} sm={6} md={4}>
              <div className="WeatherList">
                <WeatherListContainer/>                   
              </div>
            </Col>
            <Col xs={12} sm={6} md={4}>
                <WeatherExtendsContainer/>              
            </Col>
          </Row>              
        </Grid>
      </div>
        
    )
  }
}


export default App;

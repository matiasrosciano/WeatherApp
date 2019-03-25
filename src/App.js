import React, { Component } from 'react';
import WeatherListContainer from './containers/WeatherListContainer'
import WeatherExtendsContainer from './containers/WeatherExtendsContainer'
import SearchWeather from './components/SearchWeather'
import { Grid, Row, Col } from 'react-flexbox-grid'
import './App.css';




class App extends Component {
  constructor(){
    super()
    this.state = {
      weathers: [],
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

  render() {
    return (
      <div className="App">
        <h1>Weather App</h1>
        <Grid fluid>
          <Row>
            <Col xs={12} sm={6} md={4}>
              <SearchWeather handleonaddtolist={this.handleAddWeather}/>      
            </Col>
            <Col xs={12} sm={6} md={4}>
              <div className="WeatherList">
                { this.state.weathers &&
                  <WeatherListContainer
                    weathers={this.state.weathers}
                    />
                }            
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

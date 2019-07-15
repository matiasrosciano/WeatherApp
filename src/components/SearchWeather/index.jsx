import React, { Component } from 'react'
import WeatherLocation from './../../components/WeatherLocation'

class SearchWeather extends Component{

    constructor(){
        super()
        this.state = {
            SearchBtn: false,
            city: "",
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

      handleOnAdd = () => {
        this.props.handleonaddtolist(this.state.city)
        this.setState({
          SearchBtn: false
        })
      }

      handleOnSelectLocation = () => {
        this.props.handleOnSelectedInSearch(this.state.city)
      }

      handleonsubtmit = (e) => {
        e.preventDefault();
        console.log(e.target)
        e.target.reset()
      }
    
    render() {
        return (
            <div className="NewWeather">
                <div className="SearchCityCont">
                  <input className="TextLocation" type="text" placeholder="Buscar ciudad" id="searchlocation"/>
                  <button className="SearchButton" onClick={this.handleOnSearchCity}>Buscar</button>
                </div>
                {
                  this.state.SearchBtn &&
                  ( <span>
                      <WeatherLocation city={this.state.city} OnErrorCity={this.handleOnSearchError} handleOnClick={this.handleOnSelectLocation}/>           
                      <button className="AddWeatherBtn" onClick={this.handleOnAdd}>Agregar a la lista</button>   
                    </span>
                  )
                }
              </div>
        )
    }
}

export default SearchWeather
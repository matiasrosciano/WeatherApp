import React, { Component } from 'react';
import { connect } from 'react-redux'
import { AddCity, setCity } from './../actions'
import SearchWeather from './../components/SearchWeather'



class SearchWeatherContainer extends Component {

    
  handleAddWeather = (city) =>{
    let NewWeather = {
      city
    }
    this.props.dispatchAddCity(NewWeather)
  }

  handleOnSelectLocation = (city) => {    
    this.props.dispatchsetCity(city)
}




    render() {
        return (
            <SearchWeather 
              handleonaddtolist={this.handleAddWeather}
              handleOnSelectedInSearch={this.handleOnSelectLocation}  
            />
        );
    }
}

const mapDispatchToProps = dispatch => ({
    dispatchAddCity: value => dispatch(AddCity(value)),
    dispatchsetCity: value => dispatch(setCity(value))
})

export default connect(null,mapDispatchToProps)(SearchWeatherContainer);
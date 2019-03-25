import React, { Component } from 'react';
import { connect } from 'react-redux'
import { AddCity } from './../actions'
import SearchWeather from './../components/SearchWeather'



class SearchWeatherContainer extends Component {

    
  handleAddWeather = (city) =>{
    let NewWeather = {
      city
    }

    this.props.dispatchAddCity(NewWeather)

    /*
    this.setState({
      weathers: [...this.state.weathers,NewWeather]
    })*/

  }


    render() {
        return (
            <SearchWeather handleonaddtolist={this.handleAddWeather}/>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    dispatchAddCity: value => dispatch(AddCity(value))
})

export default connect(null,mapDispatchToProps)(SearchWeatherContainer);